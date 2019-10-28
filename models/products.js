const Sequelize = require('sequelize');
const db = require('../config/database');

const products = db.define('products', {
    productCode: {
        type: Sequelize.STRING
    },
    productName: {
        type: Sequelize.STRING
    },
    productLine: {
        type: Sequelize.STRING
    },
    productScale: {
        type: Sequelize.STRING
    },
    productVendor: {
        type: Sequelize.STRING
    },
    productDescription: {
        type: Sequelize.STRING
    },
    quantityInStock: {
        type: Sequelize.STRING
    },
    buyPrice: {
        type: Sequelize.STRING
    },
    MSRP: {
        type: Sequelize.STRING
    },
});

products.removeAttribute('id');
products.removeAttribute('createdAt');
products.removeAttribute('updatedAt');

module.exports = products;