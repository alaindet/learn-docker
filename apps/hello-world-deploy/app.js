const path = require('path');
const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'hello.html');
  res.sendFile(filePath);
});

app.listen(80);
