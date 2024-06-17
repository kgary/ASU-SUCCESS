const express = require('express');
const http = require('http');
const Dictionary = require('./dictionary');
const fs = require('fs');
const cors = require('cors');
const { OpenAI } = require('openai');
const { NlpManager } = require('node-nlp');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load the chatbot dictionary
let dictionaryData = fs.readFileSync('default.json', 'utf8');
let dictionary = new Dictionary(JSON.parse(dictionaryData));

// Arduino IP address and port
// const arduinoIP = '192.168.77.195'; //192.168.79.195
// const arduinoPort = 80;

// // Function to send data to Arduino using POST request
// function sendToArduino(data) {
//     return new Promise((resolve, reject) => {
//         const options = {
//             hostname: arduinoIP,
//             port: arduinoPort,
//             path: '/',
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Content-Length': Buffer.byteLength(data)
//             }
//         };

//         const req = http.request(options, res => {
//             let responseData = '';
//             res.setEncoding('utf8');
            
//             res.on('data', chunk => {
//                 console.log(`Response from Arduino: ${chunk}`);
//                 responseData += chunk;
//             });

//             res.on('end', () => {
//                 console.log('No more data in response.');
//                 resolve(responseData);
//             });
//         });

//         req.on('error', e => {
//             console.error(`Problem with request: ${e.message}`);
//             reject(e);
//         });

//         // Write data to request body
//         console.log(`Sending data to Arduino: ${data}`);
//         req.write(data);
//         req.end(() => {
//             console.log('Request ended.');
//         });
//     });
// }


// const openai = new OpenAI({
//     apiKey: 'api-key' // Replace with your OpenAI API key
// });

const manager = new NlpManager({ languages: ['en'] });

// Train the NLP model
manager.addDocument('en', 'hello', 'greetings.hello');
manager.addDocument('en', 'hi', 'greetings.hello');
manager.addDocument('en', 'how are you', 'greetings.howareyou');
manager.addDocument('en', 'what is your name', 'agent.name');

manager.addAnswer('en', 'greetings.hello', 'Hello! How can I help you today?');
manager.addAnswer('en', 'greetings.howareyou', 'I am fine, thank you! How can I assist you?');
manager.addAnswer('en', 'agent.name', 'I am your friendly chatbot.');

(async () => {
    console.log('Training the NLP model...');
    await manager.train();
    manager.save();
    console.log('Training completed.');

    // Start the server after training is complete
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
})();


async function getAIResponse(prompt) {
    const response = await manager.process('en', prompt);
    return response.answer;
    // const response = await openai.completions.create({
    //     model: 'gpt-3.5-turbo',
    //     prompt: prompt,
    //     max_tokens: 150,
    //     temperature: 0.9,
    // });

    // return response.choices[0].text.trim();
}

// Routes
app.post('/send-command', async (req, res) => {
    const { command, repeat } = req.body;
    const flickerCommand = JSON.stringify({ command: "FLICKER_SIGNAL" });

    if (command) {
        let wordToArduino1, wordToArduino2;

        if (repeat) {
            // If repeat flag is true, use the command directly as it contains the last response and question
            wordToArduino1 = command.wordToArduino1;
            wordToArduino2 = command.wordToArduino2;
        } else {
           // Generate new responses using AI
           try {
                wordToArduino1 = await getAIResponse(command.wordToArduino1);
                wordToArduino2 = await getAIResponse(command.wordToArduino2);
            } catch (error) {
                console.error('Error getting response from AI:', error);
                res.status(500).send('Error getting response from AI');
                return;
            }
        }

        res.send({ wordToArduino1, wordToArduino2 });

        // console.log(`Sending to Arduino: ${wordToArduino1}`);
        // try {
        //     await sendToArduino(JSON.stringify({ command: wordToArduino1.toUpperCase() }));
        //     console.log('First command sent successfully.');
        // } catch (error) {
        //     console.error('Error sending first command to Arduino:', error);
        // }

        // console.log('Sending flicker command to Arduino.');
        // try {
        //     await new Promise(resolve => setTimeout(resolve, 2000)); // Ensure 2-second delay
        //     await sendToArduino(flickerCommand);
        //     console.log('Flicker command sent successfully.');
        // } catch (error) {
        //     console.error('Error sending flicker command to Arduino:', error);
        // }

        // console.log(`Sending to Arduino: ${wordToArduino2}`);
        // try {
        //     await new Promise(resolve => setTimeout(resolve, 2000)); // Ensure 2-second delay
        //     await sendToArduino(JSON.stringify({ command: wordToArduino2.toUpperCase() }));
        //     console.log('Second command sent successfully.');
        // } catch (error) {
        //     console.error('Error sending second command to Arduino:', error);
        // }
    } else {
        res.status(400).send('No command provided');
    }
});

// Endpoint to receive logs from Arduino
// app.post('/log', (req, res) => {
//     const message = req.body.message;
//     console.log('Log from Arduino:', message);
//     res.sendStatus(200);
// });

// Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });