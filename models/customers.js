const Sequelize = require('sequelize');
const db = require('../config/database');

const customers = db.define('customers', {
    customerNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    customerName: {
        type: Sequelize.STRING
    },
    contactLastName: {
        type: Sequelize.STRING
    },
    contactFirstName: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    addressLine1: {
        type: Sequelize.STRING
    },
    addressLine2: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    postalCode: {
        type: Sequelize.STRING
    },
    country: {
        type: Sequelize.STRING
    },
    salesRepEmployeeNumber: {
        type: Sequelize.INTEGER
    },
    creditLimit: {
        type: Sequelize.INTEGER
    },
    points: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

customers.removeAttribute('id');

module.exports = customers;