const express = require('express');
const app = express(); 

let counter = 0;

app.get('/', (req, res) => {
    // Endpoint: /
    res.json({ counter });
});

app.get('/increment', (req, res) => {
    // Endpoint: /increment
    counter++;
    res.json({ counter });
});

app.get('/decrement', (req, res) => {
    // Endpoint: /decrement
    counter--;
    res.json({ counter });
});

// Start the server
const HOSTNAME = 'localhost';
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
});
