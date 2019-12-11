const sequelize = require('sequelize');
const db = require('../config/database');

const Discount = db.define('discount', {
    discountCode: {
        type: sequelize.STRING,
        primaryKey: true
    },
    discountPrice: {
        type: sequelize.FLOAT
    },
    minimumPrice: {
        type: sequelize.FLOAT
    },
    usableTimes: {
        type: sequelize.INTEGER
    },
    expireDate: {
        type: sequelize.DATEONLY
    }
}, {
    timestamps: false
});

module.exports = Discount;