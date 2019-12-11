const Sequelize = require('sequelize');
const db = require('../config/database');

const offices = db.define('offices',{
    officeCode:{
        type: Sequelize.STRING
    },
    city:{
        type: Sequelize.STRING
    },
    phone:{
        type: Sequelize.STRING
    },
    addressLine1:{
        type: Sequelize.STRING
    },
    addressLine2:{
        type: Sequelize.STRING
    },
    state:{
        type: Sequelize.STRING
    },
    country:{
        type: Sequelize.STRING
    },
    postalCode:{
        type: Sequelize.STRING
    },
    territory:{
        type: Sequelize.STRING
    }
},{
    timestamps: false
});

offices.removeAttribute('id');
offices.removeAttribute('createdAt');
offices.removeAttribute('updatedAt');

module.exports = offices;