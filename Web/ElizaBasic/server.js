const express = require('express');
const http = require('http');
const Dictionary = require('./dictionary');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load the chatbot dictionary
let dictionaryData = fs.readFileSync('default.json', 'utf8');
let dictionary = new Dictionary(JSON.parse(dictionaryData));

/*
const arduinoIP = '192.168.77.195';
const arduinoPort = 80;

// Function to send data to Arduino using POST request
function sendToArduino(data) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: arduinoIP,
            port: arduinoPort,
            path: '/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(data)
            }
        };

        const req = http.request(options, res => {
            let responseData = '';
            res.setEncoding('utf8');
            
            res.on('data', chunk => {
                console.log(`Response from Arduino: ${chunk}`);
                responseData += chunk;
            });

            res.on('end', () => {
                console.log('No more data in response.');
                resolve(responseData);
            });
        });

        req.on('error', e => {
            console.error(`Problem with request: ${e.message}`);
            reject(e);
        });

        // Write data to request body
        console.log(`Sending data to Arduino: ${data}`);
        req.write(data);
        req.end(() => {
            console.log('Request ended.');
        });
    });
}

async function lightUpLEDStrip(wordToArduino1, wordToArduino2,flickerCommand){
        console.log(`Sending to Arduino: ${wordToArduino1}`);
        try {
            await sendToArduino(JSON.stringify({ command: wordToArduino1.toUpperCase() }));
            console.log('First command sent successfully.');
        } catch (error) {
            console.error('Error sending first command to Arduino:', error);
        }

        console.log('Sending flicker command to Arduino.');
        try {
            await new Promise(resolve => setTimeout(resolve, 2000)); // Ensure 2-second delay
            await sendToArduino(flickerCommand);
            console.log('Flicker command sent successfully.');
        } catch (error) {
            console.error('Error sending flicker command to Arduino:', error);
        }

        console.log(`Sending to Arduino: ${wordToArduino2}`);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000)); // Ensure 2-second delay
            await sendToArduino(JSON.stringify({ command: wordToArduino2.toUpperCase() }));
            console.log('Second command sent successfully.');
        } catch (error) {
            console.error('Error sending second command to Arduino:', error);
        }
} 
*/

function getElizaResponse(word1,wordToArduino1,wordToArduino2){
    let keywords = dictionary.getKeywords(word1);
    wordToArduino1 = dictionary.getAnswer(keywords).toUpperCase();
    wordToArduino2 = dictionary.getQuestion(keywords).toUpperCase();
    return { wordToArduino1, wordToArduino2 };
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
            // Generate new responses from the dictionary
            const response = getElizaResponse(command.wordToArduino1);
            wordToArduino1 = response.wordToArduino1;
            wordToArduino2 = response.wordToArduino2;
        }
        
        res.send({ wordToArduino1, wordToArduino2 });
        // lightUpLEDStrip(wordToArduino1, wordToArduino2,flickerCommand);
    } else {
        res.status(400).send('No command provided');
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});