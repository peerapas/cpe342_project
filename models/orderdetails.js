const Sequelize = require('sequelize');
const db = require('../config/database');

const orderdetails = db.define('ordersdetails', {
    orderNumber: {
        type: Sequelize.STRING
    },
    productCode: {
        type: Sequelize.STRING
    },
    quantityOrdered: {
        type: Sequelize.STRING
    },
    priceEach: {
        type: Sequelize.STRING
    },
    orderLineNumber: {
        type: Sequelize.STRING
    }
},{
    timestamps: false
});

orderdetails.removeAttribute('id');
orderdetails.removeAttribute('createdAt');
orderdetails.removeAttribute('updatedAt');

module.exports = orderdetails;