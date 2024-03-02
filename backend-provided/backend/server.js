const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3333;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Dummy user data for authentication
const users = [
  { username: 'ttuna@gmail.com', password: 'password', token: 'dummyToken1' },
  { username: 'bill.smith@outlook.com', password: 'secret', token: 'dummyToken2' },
  { username: 'tpretty@gmail.com', password: 'FeeFallin', token: 'dummyToken3' },
  { username: 'brain.addams@outlook.com', password: 'abcd123', token: 'dummyToken4' }
];

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if user exists and credentials are correct
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Return a valid token if credentials are correct
    res.json({ uuid: user.token });
  } else {
    // Return error message if credentials are incorrect
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Fetch Chuck Norris fact route
app.get('/facts', (req, res) => {
  const token = req.headers.authorization;

  // Dummy Chuck Norris fact
  const facts = [
    "Chuck Norris can divide by zero.",
    "When Chuck Norris enters a room, he doesn't turn the lights on. He turns the dark off.",
    "Chuck Norris can hear sign language."
  ];

  // Check if token is valid (dummy check for now)
  if (token && token.startsWith('dummyToken')) {
    // Return a random Chuck Norris fact if token is valid
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    res.json({ fact: randomFact });
  } else {
    // Return error message if token is invalid
    res.status(401).json({ message: 'Unauthorized' });
  }
});

// Logout route (optional)
app.post('/logout', (req, res) => {
  // Clear the token (dummy implementation)
  res.json({ message: 'Logout successful' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

