const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.json());

const users = {
    'user1': 'password',
};

const sessions = {};

const authenticateUser = (req, res, next) => {
    const sessionId = req.cookies.sessionId;

    if (!sessionId || !sessions[sessionId]) {
        return res.status(401).send('Unauthorized: Please login first.');
    }

    req.username = sessions[sessionId];
    next();
};

app.post('/login', express.urlencoded({ extended: true }), (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    if (users[username] && users[username] === password) {
        const sessionId = Math.random().toString(36).substring(2, 15);

        sessions[sessionId] = username;

        res.cookie('sessionId', sessionId, { httpOnly: true });
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid username or password.');
    }
});

app.get('/', authenticateUser, (req, res) => {
    res.send(`Welcome, ${req.username}!`);
});

app.get('/logout', authenticateUser, (req, res) => {
    const sessionId = req.cookies.sessionId;

    delete sessions[sessionId];

    res.clearCookie('sessionId');
    res.send('Logout successful!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});