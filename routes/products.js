const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Products = require('../models/products');

router.get('/', (req, res) => Products.findAll()
    .then(products => {
        res.send(products);
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
);

router.get('/vendor', (req, res) => {
    Products.findAll({group : 'ProductVendor'})
    .then(product => {
        res.send(product);
    })
    .catch((err) => console.log(err))
});

router.get('/vendor/:find', (req, res) => {
    Products.findAll({ where: {ProductVendor: req.params.find}})
    .then(product => {
        res.send(product);
    })
});

router.get('/scale', (req, res) => {
    Products.findAll({group : 'ProductScale'})
    .then(product => {
        res.send(product);
    })
    .catch((err) => console.log(err))
});

router.get('/scale/:find', (req, res) => {
    Products.findAll({ where: {ProductScale: req.params.find}})
    .then(product => {
        res.send(product);
    })
});

module.exports = router;