const Sequelize = require('sequelize');
const db = require('../config/database');

const orders = db.define('orders', {
    orderNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    orderDate: {
        type: Sequelize.DATEONLY
    },
    requiredDate: {
        type: Sequelize.DATEONLY
    },
    shippedDate: {
        type: Sequelize.DATEONLY
    },
    status: {
        type: Sequelize.STRING
    },
    comments: {
        type: Sequelize.STRING
    },
    customerNumber: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

orders.removeAttribute('id');

module.exports = orders;