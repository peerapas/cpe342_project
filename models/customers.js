const Sequelize = require('sequelize');
const db = require('../config/database');

const customers = db.define('customers', {
    customerNumber: {
        type: Sequelize.STRING
    },
    customerName: {
        type: Sequelize.STRING
    },
    customerLastName: {
        type: Sequelize.STRING
    },
    customerFirstName: {
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
        type: Sequelize.STRING
    },
    creditLimit: {
        type: Sequelize.STRING
    }
});

customers.removeAttribute('id');
customers.removeAttribute('createdAt');
customers.removeAttribute('updatedAt');

module.exports = customers;