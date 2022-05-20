const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Gets all employees in table
router.get('/employees', (req,res) => {
    const sql = `SELECT employee.id ,employee.first_name, employee.last_name, role.title, role.salary, department.name AS department
        FROM employee
        LEFT JOIN role
        ON employee.role_id = role.id
        LEFT JOIN department
        ON role.department_id = department.id`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json ({
            message: 'Success',
            data: rows
        });
    });
});

module.exports = router;