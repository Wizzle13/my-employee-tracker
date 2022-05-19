const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQL username
        user: 'root',
        // Your MySQL password
        password: 'wizzle13',
        database: 'employeetracker'
    },
    console.log('Connected to the employeetracker database.')
);

module.exports = db;
