const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from the other side!</h1>
  `);
})

app.listen(PORT);
