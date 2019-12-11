const Sequelize = require('sequelize');
const db = require('../config/database');

const employees = db.define('employees',{
    employeeNumber: {
        type: Sequelize.STRING
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
        type: Sequelize.STRING
    },
    jobTitle: {
        type: Sequelize.STRING
    },
    Password: {
        type: Sequelize.STRING
    }
},{
    timestamps: false
});

employees.removeAttribute('id');
employees.removeAttribute('createdAt');
employees.removeAttribute('updatedAt');

module.exports = employees;