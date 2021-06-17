const fs = require('fs').promises;
const exists = require('fs').exists;
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const folderExists = (folderPath) => {
  try {
    fs.access(tempFolderPath);
    return true;
  } catch (exception) {
    return false;
  }
};

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use('/feedback', express.static('feedback'));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'pages', 'feedback.html');
  res.sendFile(filePath);
});

app.get('/exists', (req, res) => {
  const filePath = path.join(__dirname, 'pages', 'exists.html');
  res.sendFile(filePath);
});

app.post('/create', async (req, res) => {

  const title = req.body.title;
  const content = req.body.text;
  const adjTitle = title.toLowerCase();
  const tempFolderPath = path.join(__dirname, 'temp');
  const tempFilePath = path.join(tempFolderPath, adjTitle + '.txt');
  const finalFilePath = path.join(__dirname, 'feedback', adjTitle + '.txt');

  if (!folderExists(tempFolderPath)) {
    await fs.mkdir(tempFolderPath);
  }

  await fs.writeFile(tempFilePath, content);

  exists(finalFilePath, async (exists) => {
    if (exists) {
      res.redirect('/exists');
    } else {
      await fs.copyFile(tempFilePath, finalFilePath);
      await fs.unlink(tempFilePath);
      res.redirect('/');
    }
  });
});

app.listen(80);
