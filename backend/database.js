const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://root:2|(7j£G7lSzI@localhost:3306/getix', {
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
