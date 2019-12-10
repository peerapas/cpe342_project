const sequelize = require('sequelize');
const db = require('../config/database');

const stock_in = db.define('stocks', {
    lot_id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    productCode: {
        type: sequelize.STRING,
        primaryKey: true
    },
    quantity: {
        type: sequelize.INTEGER
    },
    in_date: {
        type: sequelize.DATE
    }
});

stock_in.removeAttribute('id');
stock_in.removeAttribute('updatedAt');
stock_in.removeAttribute('createdAt');

module.exports = stock_in;

stock_in.create({ lot_id: 1, productCode: 'abc', quantity: 10, in_date: '12-25-19' });

stock_in.findAll().then(d => d.forEach(e => console.log(e)))
    .catch(err => console.log(err));