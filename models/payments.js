const Sequelize = require('sequelize');
const db = require('../config/database');

const payments = db.define('payments',{
    customerNumber: {
        type: Sequelize.STRING
    },
    checkNumber: {
        type: Sequelize.STRING
    },
    paymentDate: {
        type: Sequelize.STRING
    },
    amount: {
        type: Sequelize.STRING
    }
},{
    timestamps: false
});

payments.removeAttribute('id');
payments.removeAttribute('createdAt');
payments.removeAttribute('updateAt');

module.exports = payments;