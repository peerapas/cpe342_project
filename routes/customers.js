const express = require('express');
const router = express.Router();
const Customers = require('../models/customers');

router.get('/', (req, res) => {
    Customers.findAll()
        .then(d => res.send(d));
});

module.exports = router;