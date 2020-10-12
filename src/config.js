const dotenv = require('dotenv');

const defaults = {
  production: false,
  root: '/',
  port: 3000,
  cors: {
    // Check cors doc for options - v4
    // https://www.npmjs.com/package/cors#configuration-options
  },
  mongo: {
    uri: 'mongodb://localhost:27017/TUTO_REGIMENT',
    opts: {
      autoReconnect: true,
      reconnectTries: 10,
      reconnectInterval: 1,
      poolSize: 20,
    },
  },
  log: 'debug',
};

dotenv.config();

module.exports = defaults;