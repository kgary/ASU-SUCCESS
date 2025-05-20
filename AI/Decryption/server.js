const express = require('express');
const crypto = require('crypto');
const cors = require('cors');
const { OpenAI } = require('openai');
const fs = require('fs');

const app = express();
const port = 8888;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function decrypt(text) {
    const [iv, encryptedText] = text.split(':');
    const secretKey = Buffer.from(fs.readFileSync('secret-key.txt', 'utf8'), 'hex'); // Read the secret key from the file
    console.log("secretKey", secretKey);
    console.log("text", text);
    const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(Buffer.from(encryptedText, 'hex'), 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

async function getAIResponse(prompt, apiKey) {
    const openai = new OpenAI({
        apiKey: apiKey
    });

    console.log("Prompt received:", prompt);

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: prompt },
                { role: 'user', content: 'Give your response in no more than 5 words and then ask a follow up question as well in no more than 5 words, both separated by a #' }
            ]
        });

        console.log("Response from OpenAI:", response);

        const fullResponse = response.choices[0].message.content.trim();

        // Assuming the model separates the response and follow-up question by a period
        const [aiResponse, followUpQuestion] = fullResponse.split('#').map(part => part.trim());

        return { aiResponse, followUpQuestion };
    } catch (error) {
        console.error("Error in OpenAI API call:", error.response ? error.response.data : error.message);
        throw error;
    }
}

// Endpoint to handle client requests and fetch AI responses
app.post('/ai-response', async (req, res) => {
    const { prompt, encryptedApiKey } = req.body;
    console.log("Request body:", req.body);
    try {
        // Commented out this to bypass encryption
        // const apiKey = decrypt(encryptedApiKey);
        const apiKey = encryptedApiKey; // it is not really encrypted
        const aiResponse = await getAIResponse(prompt, apiKey);
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
