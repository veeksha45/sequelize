const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const { sequelize } = require('./models/booking');

app.use(express.json());
app.use('/', apiRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
}).catch((err) => {
  console.error('Error syncing database:', err);
});
