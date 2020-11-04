"use strict";

const express = require('express');
const router = express.Router();
const connection = require('../../db');

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const params = [email, password];
    const sql = "SELECT * FROM user WHERE email = ? AND password = ?";

    connection.query(sql, params, (err, rows, fields) => {
        if(err) {
            res.send(err);
        } else if (rows.length) {
            res.send({"exists": true});
        } else {
            res.send({"exists": false});
        }
    });
});

module.exports = router;