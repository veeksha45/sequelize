const express = require('express');
const app = express();
const sequelize = require('./utils/db-connection');

const userRoutes = require('./routes/studRoutes');

app.use(express.json());
app.use('/users', userRoutes);

const PORT = 3000;

sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});