const Sequelize = require('sequelize');
const db = require('../config/database');

const payments = db.define('payments', {
    customerNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    checkNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    paymentDate: {
        type: Sequelize.DATEONLY
    },
    amount: {
        type: Sequelize.INTEGER
    },
    discountCode: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

payments.removeAttribute('id');

module.exports = payments;