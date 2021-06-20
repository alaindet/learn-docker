const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const middlewares = require('./middlewares');
const goalsController = require('./controllers/goals');

// Create app
const app = express();

// Set middlewares
app.use(middlewares.logger);
app.use(middlewares.json);
app.use(middlewares.cors);

// Set routes
app.get('/goals', goalsController.read);
app.post('/goals', goalsController.create);
app.delete('/goals', goalsController.remove);

// Connect to database
const { dns, connectOptions } = config.mongoose;
mongoose.connect(dns, connectOptions, err => {

  if (err) {
    console.error('FAILED TO CONNECT TO MONGODB');
    console.error(err);
    return;
  }

  console.log('CONNECTED TO MONGODB');
  app.listen(config.http.port, () => {
    console.log(`${config.app.name} started on port ${config.http.port}`);
  });

});
