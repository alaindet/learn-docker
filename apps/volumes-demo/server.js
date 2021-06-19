const express = require('express');
const config = require('./config');
const utils = require('./utils');
const createFileController = require('./controllers/create-file');
const readFileController = require('./controllers/read-file');

// Setup
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', config.paths.views);
app.use(express.static(config.paths.public));

// Routes
app.get('/', createFileController.createFileForm);
app.post('/create', createFileController.createFile);
app.get('/read/:filename', readFileController.readFile);

// Bootstrap
app.listen(
  config.http.port,
  () => utils.log.write(
    `File creator demo started on port ${config.http.port}`
  ),
);
