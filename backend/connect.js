const sequelize = require('./database');
const User = require('./models/User');
const bcrypt = require('bcrypt');

async function seedDatabase() {
  try {
    console.log('Seeding database...');

    await sequelize.sync({ alter: true });

    const adminUser = await User.findOne({ where: { Email: 'admin@example.com' } });

    if (!adminUser) {
      const adminPassword = 'adminPassword123';

      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(adminPassword, salt);

      await User.create({
        Name: 'Admin',
        Email: 'admin@example.com',
        PasswordHash: hashedPassword,
        HashSalt: salt
      });

      console.log('Admin user created!');
    } else {
      console.log('Admin user already exists, skipping seeding.');
    }
  } catch (error) {
    console.error('Error during database seeding:', error.message);
  }
}

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    
    await seedDatabase();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = sequelize;
module.exports.connect = connect;