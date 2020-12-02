"use strict";

const mysql = require('mysql');
require('dotenv').config();

const host = process.env.PRODUCTDB_HOST;
const user = process.env.PRODUCTDB_USER;
const password = process.env.PRODUCTDB_PASS;
const database = process.env.PRODUCTDB_DB;

console.log('host ', host);
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
    console.log("Product DB Connection Success!");
  } else {
    console.log("Product DB Connection Fail!" + err);
  }
});

module.exports = connection;
