const Sequelize = require('sequelize');

const sequelize = require('../database/database');

const signIn = sequelize.define('signIn',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_name:{
        type: Sequelize.STRING
    },
    user_email:{
        type: Sequelize.STRING,
        unique:true    
    }
})

module.exports = signIn;