const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./connect');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');

const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', eventRoutes);

sequelize.connect();

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});