const express = require('express');
const router = express.Router();
var cryptoJS = require("crypto-js");
const Employees = require('../models/employees');

router.get('/', (req, res) => {
    Employees.findAll()
    .then(employees => {
        res.send(employees);
    })
    .catch(err => console.log(err))
});

router.get('/login/createPassword/:password', (req, res) => {
    Employees.update(
        {
            Password: cryptoJS.AES.encrypt(req.params.password,"cpe342").toString()
        },
        {
            where: {employeeNumber: "1002"},
            silent: true
        }
    ).then(e => console.log('updated'+e));
    res.sendStatus(200);
});

router.post('/login/createPasswordAll/:password', (req, res) => {

});

module.exports = router;