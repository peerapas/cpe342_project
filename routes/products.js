const express = require('express');
const router = express.Router();
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

router.get('/edit/:find', (req, res) => {
    Products.findAll({ where: {ProductCode: req.params.find}})
    .then(product => {
        res.send(product)
    })
})

router.post('/edit', (req, res) => {
    console.log(req.body.Name)
    Products.update({
        productName: req.body.Name,
        productLine: req.body.Line,
        productSclae: req.body.Scale,
        productVendor: req.body.Vendor,
        productDescription: req.body.Desc,
        quantityInStock: req.body.Quantity,
        buyPrice: req.body.Price,
        MSRP: req.body.MSRP
    },
    {
        where: {productCode: req.body.Code},
        silent: true
    }).then(e => {
        if(e.productName == req.body.Name){
            res.end('done');
        }
    })
})

module.exports = router;