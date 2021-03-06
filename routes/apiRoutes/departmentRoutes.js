const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Gets all departments in table
router.get('/departments', (req,res) => {
    const sql = `SELECT * FROM department`;
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