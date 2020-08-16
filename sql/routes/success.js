const connection = require('../db/db');
const express = require('express');
const router = new express.Router();

router.get('/success', (req, res) => {
    let query = 'SELECT * FROM names';
    connection.query(query, (error, result) => {
        if(error) {
            return res.status(500).json({ error: error });
        }
        return res.status(201).send({'name': result});
    });
});

module.exports = router;