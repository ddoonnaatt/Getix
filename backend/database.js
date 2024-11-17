const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://root:2|(7j£G7lSzI@localhost:3306/getix', {
  dialect: 'mysql',
  logging: false,
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = sequelize;
module.exports.connect = connect;
