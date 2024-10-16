const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MySQL connection
const db = require('./db_config');

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files (CSS, JS)
app.use(express.static('views'));  // Serve HTML files

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(query, [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.send("Login successful!");
        } else {
            res.send("Invalid username or password.");
        }
    });
});

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(query, [username, email, password], (err, result) => {
        if (err) throw err;
        res.send("Signup successful!");
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
