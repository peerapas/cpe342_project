const express = require('express');
const router = express.Router();
const Discount = require('../models/discount');


router.post('/create', (req, res) => {
    // console.log(req.body.Code);
    Discount.create({
        discountCode:  req.body.Code,
        discountPrice: req.body.Amount,
        minimumPrice: req.body.Min,
        usableTimes: req.body.Num,
        expireDate: req.body.Exp
    }).then(e => {
        if(e.productName == req.body.Name){
            res.end('done');
        }
    })
})

module.exports = router;