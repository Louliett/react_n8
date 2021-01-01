"use strict";

const express = require('express');
const router = express.Router();
const connection = require('../../user_db');
const { transporter, mailOptions } = require('../services/mail.services');
const { sortUsersPerPage } = require('../services/user.services');

//get all the users
router.get('/', (req, res) => {
    let sql = "SELECT * FROM user;";
    connection.query(sql, (err, rows, fields) => {
      if (err) {
        res.send(err);
      } else {
        res.send(rows);
      }
    });
  });

//get users per page
router.get('/:page/:users_per_page', (req, res) => {
    let page = req.params.page;
    let usersPerPage = req.params.users_per_page;
    let sql = "SELECT * FROM user;";

    connection.query(sql, (err, rows, fields) => {
      if (err) {
        res.send(err);
      } else {
          let users_per_page = sortUsersPerPage(rows, page, usersPerPage)
          res.send(users_per_page);
      }
    });
  });



//deletes an user and all associated addresses
router.delete('/delete/:userid', (req, res) => {
    var userId = req.params.userid;
    var params = [userId, userId];
    var sql = "DELETE user_address, address " +
              "FROM user " +
              "JOIN user_address ON user.id=user_address.user_id " +
              "JOIN address ON user_address.address_id=address.id " +
              "WHERE user.id=?; " +
              "DELETE FROM user WHERE id=?;";
    connection.query(sql, params, (err, rows, fields) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            res.send({
                message: "Deleted."
            });
        }
    });
});

//method for login
//return an object with user info if it exists
//or a message that user doesnt exist
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

//method that sends an email with instructions to a user
//does nothing if the email doesn't exist
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

//method to update user pasword base on user id
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

router.post('/generate-user', (req, res) => {
    var us = Math.random().toString(36).substr(2, 5);
    var ad = Math.random().toString(36).substr(2, 5);
    var params = [us, us, us, us, ad, ad, ad, ad, 99, 0, ad, ad, ad, ad, 99, 1];
    const user =    "INSERT INTO user (first_name, last_name, email, password) " +
                    "VALUES (?, ?, ?, ?); " +
                    "SET @userID = LAST_INSERT_ID(); ";
    const address = "INSERT INTO address (name, second_name, city, postcode, phone_number, shipping) " +
                    "VALUES (?, ?, ?, ?, ?, ?); " +
                    "SET @addressID = LAST_INSERT_ID(); ";
    const useadr =  "INSERT INTO user_address (user_id, address_id) " +
                    "VALUES (@userID, @addressID); ";

    const fquery = user + address + useadr + address + useadr; 

    connection.query(fquery, params, (err, rows, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.send('done');
        }
    });



});

module.exports = router;