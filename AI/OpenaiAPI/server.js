const express = require('express');
const http = require('http');
const Dictionary = require('./dictionary');
const fs = require('fs');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config()

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Arduino IP address and port
const arduinoIP = '192.168.77.195'; //192.168.79.195
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


async function getAIResponse(prompt) {
    try {
        const response = await axios.post('http://192.168.0.41:8888/ai-response', { 
            prompt: prompt, 
            encryptedApiKey: process.env.OPENAI_API_KEY 
        });
        console.log('AI Response:', response.data.response);
        return response.data.response;
    } catch (error) {
        console.error('Error fetching AI response from server:', error.response ? error.response.data : error.message);
        throw error;
    }
}

// Routes
app.post('/send-command', async (req, res) => {
    const { command } = req.body;
    const flickerCommand = JSON.stringify({ command: "FLICKER_SIGNAL" });

    if (command) {
        let out;
           // Generate new responses using AI
           try {
                console.log("sending to ai server")
                out = await getAIResponse(command.word1);
            } catch (error) {
                console.error('Error getting response from AI:', error);
                res.status(500).send('Error getting response from AI');
                return;
            }

        res.send(out);

        console.log(`Sending to Arduino: ${out.aiResponse}`);
        try {
            await sendToArduino(JSON.stringify({ command: out.aiResponse.toUpperCase() }));
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

        console.log(`Sending to Arduino: ${out.followUpQuestion}`);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000)); // Ensure 2-second delay
            await sendToArduino(JSON.stringify({ command: out.followUpQuestion.toUpperCase() }));
            console.log('Second command sent successfully.');
        } catch (error) {
            console.error('Error sending second command to Arduino:', error);
        }
    } else {
        res.status(400).send('No command provided');
    }
});



// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
