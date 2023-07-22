const http = require('http');

// Sample product data
const menProducts = [
    { id: 1, name: 'Men Product 1' },
    { id: 2, name: 'Men Product 2' } 
];

const womenProducts = [
    { id: 1, name: 'Women Product 1' },
    { id: 2, name: 'Women Product 2' } 
];

const server = http.createServer((req, res) => {
    // Set response headers
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/') {
        // Endpoint: /
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
    } else if (req.url === '/men') {
        // Endpoint: /men
        res.statusCode = 200;
        res.end(JSON.stringify(menProducts));
    } else if (req.url === '/women') {
        // Endpoint: /women
        res.statusCode = 200;
        res.end(JSON.stringify(womenProducts));
    } else {
        // Endpoint: /other (Page not found)
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Page not found' }));
    }
});

// Start the server
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
