const express = require('express');
const router = express.Router();
const Discount = require('../models/discount');

router.get('/', (req, res) => {
    Discount.findAll()
        .then(discounts => {
            res.send(discounts);
        })
        .catch(err => console.log(err))
});

router.get('/:find', (req, res) => {
    Discount.findOne({ where: { discountCode: req.params.find } })
        .then(d => res.send(d));
});

router.post('/create', (req, res) => {
    console.log(req.body.Code);
    Discount.create({
        discountCode:  req.body.d.newCode,
        discountPrice: req.body.d.newAmount,
        minimumPrice: req.body.d.newMin,
        usableTimes: req.body.d.newNum,
        expireDate: req.body.d.newExp
    }).then(e => {
        if(e.productName == req.body.Name){
            res.end('done');
        }
    })
})

router.post('/update', (req, res) => {
    Discount.update({
        discountCode: req.body.d.newCode,
        discountPrice: req.body.d.newAmount,
        usableTimes: req.body.d.newNum,
        minimumPrice: req.body.d.newMin,
        expireDate: req.body.d.newExp
    }, {
        where: { discountCode: req.body.d.newCode }
    }).then(res.end('done'))
})

router.post('/delete', (req, res) => {
    Discount.destroy({
        where: {discountCode: req.body.id}
    }).then(res.end('done'))
})

module.exports = router;