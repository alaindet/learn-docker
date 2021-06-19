const path = require('path');

const root = path.join(__dirname, '..');
const public = path.join(root, 'public');
const publicFiles = path.join(public, 'files');
const tempFiles = path.join(root, 'storage', 'temp');
const views = path.join(root, 'views');

module.exports = {
  root,
  public,
  publicFiles,
  tempFiles,
  views,
};
