"use strict";

const express = require('express');
const router = express.Router();
const connection = require('../../user_db');


//get addresses based on user id
router.get('/:userid', (req, res) => {
    var userId = req.params.userid;
    var sql = "SELECT address.id, address.name, address.second_name, " + 
              "address.city, address.postcode, address.phone_number, " + 
              "address.shipping FROM user_address " +
              "JOIN address ON user_address.address_id = address.id " +
              "JOIN user ON user_address.user_id = user.id " +
              "WHERE user.id = ?;";
    connection.query(sql, [userId], (err, rows, fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(rows);
        }
    });
});


module.exports = router;