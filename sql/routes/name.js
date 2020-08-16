const connection = require('../db/db');
const express = require('express');
const router = new express.Router();

router.post('/', (req, res) => {
    var user = {
        "name": req.body.name
    }
    let query = "INSERT INTO names SET ?";
    connection.query(query, user, (error, result) => {
        if(error) {
            return res.status(500).json({ error: error });
        }
        return res.status(201).send({'success': true});
    });
});

module.exports = router;