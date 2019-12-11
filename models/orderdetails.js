const Sequelize = require('sequelize');
const db = require('../config/database');

const orderdetails = db.define('ordersdetails', {
    orderNumber: {
        type: Sequelize.INTEGER
    },
    productCode: {
        type: Sequelize.STRING
    },
    quantityOrdered: {
        type: Sequelize.INTEGER
    },
    priceEach: {
        type: Sequelize.FLOAT
    },
    orderLineNumber: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

orderdetails.removeAttribute('id');

module.exports = orderdetails;