const Sequelize = require('Sequelize');
const express = require('express');
const router = express.Router();
const stocks = require('../models/stock_in');
const Products = require('../models/products');

router.get('/', (req, res) => {
    stocks.findAll()
        .then(e => res.send(e))
})

router.post('/add', (req, res) => {
    // console.log(req.body.product);
    var today = new Date();
    Date.now
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    stocks.create({
        productCode: req.body.product,
        quantity: req.body.amount,
        in_date: mm + '-' + dd + '-' + yyyy
    }).then(res.end('done'));
    Products.findOne({
        where: { productCode: req.body.product }
    }).then(d => d.increment('quantityInStock', { by: req.body.amount }))
})

module.exports = router;