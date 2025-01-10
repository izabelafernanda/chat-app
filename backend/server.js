const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simulando um banco de dados
let messages = [];

// Rota POST /messages
app.post('/messages', (req, res) => {
    const { content, sender, timestamp } = req.body;
    if (!content || !sender) {
        return res.status(400).json({ error: 'Content and sender are required!' });
    }

    const message = {
        id: uuidv4(),
        content,
        sender,
        timestamp: timestamp || new Date().toISOString(),
    };
    messages.push(message);

    res.status(201).json(message);
});

// Rota GET /messages
app.get('/messages', (req, res) => {
    const sortedMessages = messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    res.json(sortedMessages);
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
