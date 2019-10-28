const Sequelize = require('sequelize');
const db = require('../config/database');

const orders = db.define('orders',{
    orderNumber: {
        type: Sequelize.STRING
    },
    orderDate: {
        type: Sequelize.STRING
    },
    requiredDate: {
        type: Sequelize.STRING
    },
    shippedDate: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    },
    comments: {
        type: Sequelize.STRING
    },
    customerNumber: {
        type: Sequelize.STRING
    }
});

orders.removeAttribute('id');
orders.removeAttribute('createdAt');
orders.removeAttribute('updatedAt');

module.exports = orders;