const express = require('express');
const bodyParser = require('body-parser');

//Models
const models = require('./models/index');

//Item routes
const items = require('./routes/api/items');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

//Use routes
app.use('/api/items', items);

// Server
models.sequelize.sync().then(() => {
  app.listen(5000, function() {
    console.log('Server started on Port 5000');
  });
});