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
}, {
    timestamps: false
});

stock_in.removeAttribute('id');

module.exports = stock_in;