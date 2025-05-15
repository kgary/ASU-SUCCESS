const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

const ROOT_DIR = "/";  // Ensure this is the directory containing your static files

http.createServer(function (req, res) {
    // Set CORS headers to allow everything for all methods
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests (OPTIONS)
    if (req.method === 'OPTIONS') {
        console.log("OPTIONS");
        res.writeHead(204);  // No content
        res.end();
        return;
    }

    // Process GET requests for static files
    if (req.method === 'GET') {
        // console.log("GET " + req);
        // Decode the request URL and resolve file path
        const reqPath = decodeURIComponent(req.url);
        let filePath = path.join(__dirname, reqPath === '/' ? '/index.html' : reqPath);

        // Ensure that only files inside the root directory are served (security measure)
        if (!filePath.startsWith(ROOT_DIR)) {
            res.writeHead(403);  // Forbidden
            res.end("403 Forbidden");
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
                res.writeHead(404);  // File not found
                res.end("404 Not Found: " + err.message);
                return;
            }

            // Set the correct MIME type and send the file data
            res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
            res.end(data);
        });
    } else if (req.method === 'POST') {
        // Define the directory
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
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(randomFile);
        });
    } else {  // Handle unsupported methods
        res.writeHead(405);  // Method Not Allowed
        res.end("405 Method Not Allowed: " + req.method);
    }
}).listen(8088, 'localhost', function () {
    console.log('Server is running at http://localhost:8088');
});
