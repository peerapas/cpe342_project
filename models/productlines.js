const Sequelize = require('sequelize');
const db = require('../config/database');

const productlines = db.define('productlines',{
    productLine: {
        type: Sequelize.STRING
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
});

productlines.removeAttribute('id');
productlines.removeAttribute('createdAt');
productlines.removeAttribute('updateAt');

module.exports = productlines;