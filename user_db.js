"use strict";

const mysql = require('mysql');
require('dotenv').config();

const host = process.env.USERDB_HOST;
const user = process.env.USERDB_USER;
const password = process.env.USERDB_PASS;
const database = process.env.USERDB_DB;


const connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
  multipleStatements: true
});

//connect to the database
connection.connect((err) => {
  if(!err) {
    console.log("User DB Connection Success!");
  } else {
    console.log("User DB Connection Fail!" + err);
  }
});

module.exports = connection;
