const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'admin@gmail.com' && password === 'password') {
    const token = jwt.sign({ email }, 'veryStrongSecret', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/protected', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  jwt.verify(token, 'veryStrongSecret', (err, decoded) => {
    if(err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    res.json({ message: 'Protected route accessed', user: decoded });
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


