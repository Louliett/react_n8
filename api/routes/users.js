"use strict";

const express = require('express');
const router = express.Router();
const connection = require('../../user_db');
const { transporter, mailOptions } = require('../services/mail.services');

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const params = [email, password];
    const sql = "SELECT * FROM user WHERE email = ? AND password = ?;";

    connection.query(sql, params, (err, rows, fields) => {
        if(err) {
            res.send(err);
        } else if (rows.length) {
            res.send({
                "exists": true,
                "info": rows[0]
            });
        } else {
            res.send({"exists": false});
        }
    });
});

router.post('/email', (req, res) => {
    var email = req.body.email;
    var subject = "Password Reset.";
    var text = "To reset your password please click on the link below: \n http://localhost:3000/admin/reset-password/";
    var message = "An email with instruction has been sent to you!";
    var params = [email]
    var sql = "SELECT * FROM user WHERE email = ?;";

    connection.query(sql, params, (err, rows, fields) => {
        if (err) {
            res.send(err);
        } else {
            if(rows.length) {
                text = text + rows[0].id;
                transporter.sendMail(mailOptions(email, subject, text), (err, info) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Email sent: " + info.response);
                    }
                    res.send({message});
                });
            }
        }
    })
});

router.put('/reset-password', (req, res) => {
    const userId = req.body.id;
    const newPass = req.body.password;
    const params = [newPass, userId];
    const message = "Password updated!";
    const sql = "UPDATE user SET password = ? WHERE id = ?;";

    connection.query(sql, params, (err, rows, fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send({message});
        }
    });
});

module.exports = router;