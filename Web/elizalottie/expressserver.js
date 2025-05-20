const express = require('express');
const http = require('http');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const url = require('url');

require('dotenv').config()

const app = express();
const port = 8008;
const ROOT_DIR = "/";  // Ensure this is the directory containing your static files

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*', async (req,res) => {
    const reqPath = decodeURIComponent(req.url);
    let filePath = path.join(__dirname, reqPath === '/' ? '/elizabot.html' : reqPath);
    console.log(req.path);
    console.log(filePath);

    // Ensure that only files inside the root directory are served (security measure)
    if (!filePath.startsWith(ROOT_DIR)) {
        res.status(403).type('text/plain').send("403 Forbidden");
        return;
    }

    // Get the file extension to set the correct MIME type
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
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

app.post('/', async (req, res) => {
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
        const randomFile = jsonFiles[Math.floor(Math.random() * jsonFiles.length)];
        res.status(200).type('text/plain').send(randomFile);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});