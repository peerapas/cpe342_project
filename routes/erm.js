const express = require('express');
const router = express.Router();
const Employees = require('../models/employees');

router.get('/', (req, res) => {
    Employees.findAll()
        .then(d => res.send(d));
});

router.post('/edit_title', (req,res) => {
    console.log(parseInt(req.body.Code));
    console.log(req.body.Title);
    Employees.update(
    {
        jobTitle: req.body.Title
    },
    {
        where: {employeeNumber: parseInt(req.body.Code)}
    }).then(e => {
        if(e.jobTitle === req.body.Title){
            console.log("success");
        }
        else{
            console.log("unsuccess");
        }
    })
})

module.exports = router;