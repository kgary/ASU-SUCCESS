const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Arduino IP address and port
var arduinoIP = '192.168.0.150';
const arduinoPort = 80;
var intervalId = null;

// Function to send data to Arduino using POST request
function sendToArduino(data) {
    console.log("Arduino IP: " + arduinoIP);
    console.log("Arduino Port: " + arduinoPort);
    return new Promise((resolve, reject) => {
        const options = {
            hostname: arduinoIP,
            port: arduinoPort,
            path: '/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/text',
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

// Function to read data from Arduino using GET request
function readFromArduino() {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: arduinoIP,
            port: arduinoPort,
            path: '/',
            method: 'GET',
        };

        const req = http.request(options, res => {
            let responseData = '';
            res.setEncoding('utf8');
            
            res.on('data', chunk => {
                // console.log(`Data from Arduino: ${chunk}`);
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

        req.end(() => {
            console.log('Request ended.');
        });
    });
}

async function lightUpLEDStrip(command){
    console.log(`Sending to Arduino: ${command}`);
    try {
        await sendToArduino(command.toUpperCase());
        console.log('First command sent successfully.');
    } catch (error) {
        console.error('Error sending first command to Arduino:', error);
    }
}

// Routes
app.post('/send-command', async (req, res) => {
    let command = '';
    
    req.on('data', chunk => {
        command += chunk.toString();
    });
    req.on('end', () => {
       if (command) {
            res.send('Command received');

            // Clear the previous interval if it exists
            if (intervalId !== null) {
                clearInterval(intervalId);
            }

            // Start a new interval to call lightUpLEDStrip repeatedly
            intervalId = setInterval(() => {
                lightUpLEDStrip(command);
            }, 1000); // Adjust the interval time (in ms) as needed
        } else {
            res.status(400).send('No command provided');
        }
    });

    req.on('error', err => {
        console.error('Error receiving command:', err);
        res.status(500).send('Error receiving command');
    });
});

app.post('/ip-command', async (req, res) => {
    let ipaddr = '';
    
    req.on('data', chunk => {
        ipaddr += chunk.toString();
    });

    req.on('end', () => {
        if (ipaddr) {
            res.send('New IP address received: ' + ipaddr);
            arduinoIP = ipaddr;
        } else {
            res.status(400).send('No IP address provided');
        }
    });

    req.on('error', err => {
        console.error('Error receiving command:', err);
        res.status(500).send('Error receiving command');
    });
});

// GET route to read data from Arduino
app.get('/read-data', async (req, res) => {
    try {
        const data = await readFromArduino();
        res.send(`${data}`);
    } catch (error) {
        res.status(500).send(`Error reading data from Arduino: ${error.message}`);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});