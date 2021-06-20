const fs = require('fs');
const path = require('path');
const config = require('../config');
const morgan = require('morgan');

const accessLogFile = path.join(config.paths.logs, 'access.log');
const accessLogStream = fs.createWriteStream(accessLogFile, { flags: 'a' });

module.exports = morgan('combined', { stream: accessLogStream });
