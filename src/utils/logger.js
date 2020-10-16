const pino = require('pino');
const { name, version } = require('../../package.json');

const dotenv = require('dotenv');
dotenv.config();

module.exports = pino({
  name: `${name}:${version}`,
  prettyPrint: process.env.production,
  level: process.env.log,
});
