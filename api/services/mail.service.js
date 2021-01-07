"use strict";

const nodemailer = require('nodemailer');
require('dotenv').config();

const service = process.env.N8_SERVICE
const email = process.env.N8_EMAIL;
const password = process.env.N8_PASS;

exports.transporter = nodemailer.createTransport({
    service: service,
    auth: {
        user: email,
        pass: password
    }
});

exports.mailOptions = (client_email, subject, text) => {
    return {
        from: email,
        to: client_email,
        subject: subject,
        text: text
    };
}

