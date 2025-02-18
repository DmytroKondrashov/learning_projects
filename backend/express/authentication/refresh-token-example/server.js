require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cookieParser());

const users = [{ id: 1, username: 'user' }];

const refreshTokens = [];

const generateAccessToken = (user) => jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60s' });
const generateRefreshToken = (user) => jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

authorisedUser = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (!err) {
      req.user = user;
      return next();
    }
    
    if (err.name === 'TokenExpiredError') {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken || !refreshTokens.includes(refreshToken)) {
        return res.sendStatus(403);
      }

      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (refreshErr, decoded) => {
        if (refreshErr) return res.sendStatus(403);

        const newAccessToken = generateAccessToken({ id: decoded.id });
        res.setHeader('Authorization', `Bearer ${newAccessToken}`);
        req.user = decoded;
        next();
      });
    } else {
      res.sendStatus(403);
    }
  })
}

app.post('/login', (req, res) => {
  const { username } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.status(403).json({ message: 'Invalid username' });

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  refreshTokens.push(refreshToken);
  res.cookie('refreshToken', refreshToken, { httpOnly: true })
  res.json({ accessToken});
})

app.get('/protected', authorisedUser, (req, res) => {
  res.json({
    message: 'You are authorized to access this resource',
    user: req.user
  });
})

app.post('/refresh', (req, res) => {
  const refreshToken = req.cookies.refreshToken;
    if (!refreshToken || !refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        const newAccessToken = generateAccessToken({ id: user.id });
        res.json({ accessToken: newAccessToken });
    });
})

app.post('logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);
  res.clearCookie('refreshToken');
  res.sendStatus(204);
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

