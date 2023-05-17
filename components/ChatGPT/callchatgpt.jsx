import axios from 'axios';
import { useState } from 'react';
const { Configuration, OpenAIApi } = require("openai");

export default function CallChatGPT() {
    const axios = require('axios');

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    async function callChatGPT(prompt) {
        const messages = [{ role: "user", content: prompt }];
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        };
        const url = 'https://api.openai.com/v1/chat';

        const response = await axios.post(url, { model: "text-davinci-002", messages }, { headers });
        console.log(response.data.choices[0].text);
    }

    return (
        <div>
            <button onClick={() => callChatGPT('こんにちは、お名前は？')}>CallChatGPT</button>
        </div>
    );
}
