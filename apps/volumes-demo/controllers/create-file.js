const fs = require('fs/promises');
const path = require('path');
const config = require('../config');
const { fileExists, log } = require('../utils');
const toKebabCase = require('../utils/to-kebab-case');

function createFileForm(req, res) {
  res.render('create-file', {
    pageTitle: config.app.name,
    feedback: !req.query.success ? null : {
      message: `File ${req.query.success} created successfully`,
      createFile: `/read/${req.query.success}`
    },
  });
}

async function createFile(req, res) {

  // Read request body
  const title = req.body.title;
  const content = req.body.text;

  // Compute all file paths
  const timestamp = Date.now();
  const filename = toKebabCase(title);
  const tempFilename = `${filename}_${timestamp}.txt`;
  const tempFile = path.join(config.paths.tempFiles, tempFilename);
  const publicFilename = `${filename}.txt`;
  const publicFile = path.join(config.paths.publicFiles, publicFilename);

  // Create temporary file
  await fs.writeFile(tempFile, content);

  log.write(`Temp file created ${tempFile}`); // TODO: Remove

  if (await fileExists(publicFile)) {
    res.redirect(`/read/${publicFilename}`);
    return;
  }

  await fs.copyFile(tempFile, publicFile);

  log.write(`Copied file ${tempFile} into ${publicFile}`); // TODO: Remove

  await fs.unlink(tempFile);

  log.write(`Temp file removed ${tempFile}`); // TODO: Remove

  res.redirect(`/?success=${publicFilename}`)
}

module.exports = {
  createFileForm,
  createFile,
};