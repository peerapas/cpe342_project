const Sequelize = require('sequelize');
const db = require('../config/database');

const productlines = db.define('productlines', {
    productLine: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    textDescription: {
        type: Sequelize.STRING
    },
    htmlDescription: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

productlines.removeAttribute('id');

module.exports = productlines;