const Sequelize = require('sequelize');
const db = require('../config/database');

const employees = db.define('employees', {
    employeeNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    lastName: {
        type: Sequelize.STRING
    },
    firstName: {
        type: Sequelize.STRING
    },
    extension: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    officeCode: {
        type: Sequelize.STRING
    },
    reportsTo: {
        type: Sequelize.INTEGER
    },
    jobTitle: {
        type: Sequelize.STRING
    },
    Password: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

employees.removeAttribute('id');

module.exports = employees;