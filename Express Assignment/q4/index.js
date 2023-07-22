const express = require('express');
const app = express();
const PORT = 3000;
const HOSTNAME = 'localhost';

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.json({ random: randomNumber });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${HOSTNAME}:${PORT}`);
});
