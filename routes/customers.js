const express = require('express');
const router = express.Router();
const Customers = require('../models/customers');

router.get('/', (req, res) => {
    Customers.findAll()
        .then(d => res.send(d));
});

router.get('/:find', (req, res) => {
    Customers.findOne({ where: { customerNumber: req.params.find } })
        .then(d => res.send(d));
});

router.post('/update', (req, res) => {
    Customers.update({
        customerName: req.body.d.customerName,
        contactLastName: req.body.d.contactLastName,
        contactFirstName: req.body.d.contactFirstName,
        phone: req.body.d.phone,
        addressLine1: req.body.d.addressLine1,
        addressLine2: req.body.d.addressLine2,
        city: req.body.d.city,
        state: req.body.d.state,
        postalCode: req.body.d.postalCode,
        country: req.body.d.country,
        salesRepEmployeeNumber: req.body.d.salesRepEmployeeNumber,
        creditLimit: req.body.d.creditLimit,
        points: parseInt(req.body.d.points)
    }, {
        where: { customerNumber: req.body.d.customerNumber }
    }).then(res.end('done'))
})

router.post('/create', (req, res) => {
    Customers.create({
        customerName: req.body.d.customerName,
        contactLastName: req.body.d.contactLastName,
        contactFirstName: req.body.d.contactFirstName,
        phone: req.body.d.phone,
        addressLine1: req.body.d.addressLine1,
        addressLine2: req.body.d.addressLine2,
        city: req.body.d.city,
        state: req.body.d.state,
        postalCode: req.body.d.postalCode,
        country: req.body.d.country,
        salesRepEmployeeNumber: req.body.d.salesRepEmployeeNumber,
        creditLimit: req.body.d.creditLimit,
        points: parseInt(req.body.d.points)
    }).then(res.end('done'));
})

router.post('/delete', (req, res) => {
    Customers.destroy({
        where: { customerNumber: req.body.id }
    }).then(res.end('done'))
})

module.exports = router;