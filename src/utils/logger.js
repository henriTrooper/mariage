const pino = require('pino');
const dotenv = require('dotenv');
const { name, version } = require('../../package.json');

dotenv.config();

module.exports = pino({
  name: `${name}:${version}`,
  prettyPrint: process.env.production,
  level: process.env.log,
});
