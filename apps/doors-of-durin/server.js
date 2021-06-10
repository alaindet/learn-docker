const express = require('express');
const bodyParser = require('body-parser');

const renderDoorForm = require('./views/door-form');

const app = express();

const PORT = 80;
const correctAnswer = 'mellon';
let userAnswer = null;

// Deprecated!
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  const args = [userAnswer, correctAnswer];
  if (userAnswer === correctAnswer) {
    userAnswer = null;
  }
  res.send(renderDoorForm(...args));
});

app.post('/answer', (req, res) => {
  userAnswer = req.body.answer;
  res.redirect('/');
});

app.listen(PORT);
