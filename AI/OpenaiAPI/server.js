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

async function getAIResponse(prompt) {
    try {
        const response = await axios.post('http://localhost:8888/ai-response', { 
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

    if (command) {
        let out;
           // Generate new responses using AI
           try {
                out = await getAIResponse(command.word1);
            } catch (error) {
                console.error('Error getting response from AI:', error);
                res.status(500).send('Error getting response from AI');
                return;
            }

        res.send(out);
    } else {
        res.status(400).send('No command provided');
    }
});



// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
