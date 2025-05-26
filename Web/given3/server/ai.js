const { OpenAI } = require('openai');
require('dotenv').config();

// AI-access function
async function getAIResponse(prompt) {
    // Commented out this to bypass encryption
    // const apiKey = decrypt(encryptedApiKey);
    const apiKey = process.env.OPENAI_API_KEY; // it is not really encrypted
    const openai = new OpenAI({
        apiKey: apiKey
    });

    console.log("Prompt received:", prompt);

    try {
        // The 3 lines below are the prompt just like you would type in to ChatGPT. What does it do?
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: prompt },
                // NEW CHALLENGE 1: Modify the prompt below to make the server responses appear to be human.
                { role: 'user', content: 'Give your response in no more than 5 words and a follow up question in no more than 5 words, always separated by a #.' }
            ]
        });
        const fullResponse = response.choices[0].message.content.trim();
        console.log("Response from OpenAI:", fullResponse);
        // Assuming the model separates the response and follow-up question by a period
        var [phrase, followUpQuestion] = fullResponse.split('#').map(part => part.trim());

        // hacky fix. Sometimes API is not returning follUpQuestion
        if (followUpQuestion === undefined) {
            followUpQuestion = 'I want to talk about something else'
        }

        return { phrase, followUpQuestion };
    } catch (error) {
        console.error("Error in OpenAI API call:", error.response ? error.response.data : error.message);
        throw error;
    }
}

// This line says to make our new function available to other code
module.exports = { getAIResponse };