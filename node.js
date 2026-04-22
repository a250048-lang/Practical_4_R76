// Import HTTP module
const http = require('http');

// Define port number
const PORT = 3000;

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello Yash ! Node.js application deployed using Jenkins Pipeline.');
    res.end();
});

// Start server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
