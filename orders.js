const express = require('express')
const router = express.Router();
const db = require('../config/database');
const orders= require('../models/orders');
const payments=require('../models/payments')
const Sequelize = require('Sequelize');
const orderdetails=require('../models/orderdetails')
const Op = Sequelize.OP


router.get('/', (req, res) => {
    orders.hasMany(payments)
    payments.belongToMany(orders)
 //orders.findAll({where : {customerNumber: '363'}})
 orders.findAll({
     include:[{
         customerNumber: '363'
     }]
 })
    .then(orders => {
        res.render('purchase',{orders})
        
    })
    .catch((err) => console.log(err))
});

module.exports = router;