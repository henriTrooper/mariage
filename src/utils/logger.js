const pino = require('pino');
const config = require('../DB_config');
const { name, version } = require('../../package.json');

module.exports = pino({
  name: `${name}:${version}`,
  prettyPrint: !config.production,
  level: config.log,
});
