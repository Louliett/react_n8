const express = require('express');
const router = express.Router();
const connection = require('../../product_db');

router.get('/test', (req, res) => {
    console.log(req.headers.host);
    res.send('hello ' + req.headers.host);
});

module.exports = router;