const mysql = require('mysql2');

// Create connection
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123',
    database: 'login_signup_db'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

module.exports = db;
