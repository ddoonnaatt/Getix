const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
  UserID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  PasswordHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  HashSalt: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = User;
