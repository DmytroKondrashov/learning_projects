// To debug this code, run the following command:
// node --inspect-brk server.js
//  Then visit the following URL in your browser:
// chrome://inspect

const http = require('http');

const port = 3000;

// Intentional bug: user input array
const users = ['Alice', 'Bob', 'Charlie'];

const requestHandler = (req, res) => {
    if (req.url === '/users') {
        // Intentional bug: Array index out of bounds
        const userIndex = 5;  // There are only 3 users, index 5 will cause an issue
        
        // Debug this line to see what's happening with users[userIndex]
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ user: users[userIndex] }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        console.log('Server error:', err);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});
