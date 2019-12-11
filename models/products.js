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
        type: Sequelize.INTEGER
    },
    buyPrice: {
        type: Sequelize.FLOAT
    },
    MSRP: {
        type: Sequelize.FLOAT
    },
    releaseDate: {
        type: Sequelize.DATEONLY
    }

}, {
    timestamps: false
});
products.removeAttribute('id');
// products.removeAttribute('createdAt');
// products.removeAttribute('updatedAt');

module.exports = products;