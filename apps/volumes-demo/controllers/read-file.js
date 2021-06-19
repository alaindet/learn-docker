const fs = require('fs/promises');
const path = require('path');
const config = require('../config');

async function readFile(req, res) {

  const { filename } = req.params;
  const publicFile = path.join(config.paths.publicFiles, filename);
  const content = await fs.readFile(publicFile);

  res.render('read-file', {
    pageTitle: config.app.name,
    fileTitle: filename,
    fileContent: content,
  });
}

module.exports = {
  readFile
};