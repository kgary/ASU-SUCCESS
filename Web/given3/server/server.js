const express = require('express');
const http = require('http');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const url = require('url');

const app = express();
const port = 8008;
const ROOT_DIR = "/";  // Change this so we use the files in the server directory
const { getAIResponse } = require('./ai'); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This function will serve HTTP GET requests by returning the contents of the requested file
app.get('*', async (req,res) => {
    const reqPath = decodeURIComponent(req.url);
    let filePath = path.join(__dirname+ROOT_DIR, reqPath === '/' ? '/elizabot.html' : reqPath);

    // Get the file extension to set the correct MIME type
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.png': 'image/png',
        '.svg': 'image/svg+xml'
    };

    // Read the file and send the response
    fs.readFile(filePath, function (err, data) {
        if (err) {
            res.status(404).type('text/plain').send("404 Not Found: " + err.message);
            return;
        }

        // Set the correct MIME type and send the file data
        res.status(200).type(mimeTypes[ext] || 'application/octet-stream').send(data);
    });
});

// This function will serve HTTP POST requests by returning the name of the requested lottie file
app.post('/', async (req, res) => {
    /*
    CHALLENGE 2 (from before):
    This section of code below, if you uncomment it and comment out the line above,
    will randomly select one of the lottie json files and return that to the client
    */
    const lottieDir = path.join(__dirname, 'lotties');
    // Read all files in the lotties directory
    fs.readdir(lottieDir, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }
        // Filter for .json files
        const jsonFiles = files.filter(file => file.endsWith('.json'));
        if (jsonFiles.length === 0) {
            console.log('No .json files found in the lotties directory.');
            return;
        }
        // Select one at random
        const theFile = jsonFiles[Math.floor(Math.random() * jsonFiles.length)];
        res.status(200).type('text/plain').send(theFile);
    });
});

// This function will return responses generated by AI
app.post('/ai-response', async (req, res) => {
    const prompt = req.body.prompt;
    console.log("Prompt:", prompt);
    try {
        const aiResponse = await getAIResponse(prompt);
        res.json({ response: aiResponse });
    } catch (error) {
        console.error('Error fetching AI response:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});