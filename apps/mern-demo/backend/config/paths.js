const path = require('path');

const root = path.join(__dirname, '..');
const storage = path.join(root, 'storage');
const logs = path.join(storage, 'logs');
const models = path.join(root, 'models');

module.exports = {
  root,
  storage,
  logs,
  models,
};
