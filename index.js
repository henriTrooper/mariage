const express = require('express');
const mongoose = require('mongoose');
const {
  Server,
} = require('http');
const helmet = require('helmet');
const session = require('express-session');
const bodyParser = require('body-parser');
const config = require('./src/config');
const Logger = require('./src/utils/logger');
const api = require('./src/router/router');
const Stream = require('./src/utils/stream');
const { truncateSync } = require('fs');


const app = express();
app.logger = Logger;
app.server = new Server(app);

// Sécurité
app.set('trust proxy', 1); // trust first proxy


// ------------------------------------Connection MONGODB-------------------------------------------------------------------

async function connectMongo(reconnectTries = 10, reconnectInterval = 1000) {
  try {
    await mongoose.connect(config.mongo.uri, {
      useNewUrlParser: true,
      ...config.mongo.opts,
    });
  } catch (err) {
    await new Promise((success, reject) => {
      if (reconnectTries > 0) {
        app.logger.warn('Retrying to connect to mongo');
        Stream.writeLog('Retrying to connect to mongo');
        setTimeout(() => connectMongo(reconnectTries - 1, reconnectInterval).then(success, reject), 1);
      } else reject(err);
    });
  }
}

// ------------------------------------Mise en route du server-------------------------------------------------------------------

// Hooking up
app.server.on('close', () => app.closed());
app.server.on('listening', () => app.started());
app.server.on('error', (err) => app.logger.fatal(err));


/**
 * Called before starting the web server
 */
app.warmup = async function warmup() {
  this.logger.info('loading...Connecting to mongo ');
  await connectMongo(config.mongo.reconnectTries, config.mongo.reconnectInterval);
  this.logger.info('Connect mongodb OPEN');
  Stream.writeLog('Connect mongodb OPEN');

  mongoose.connection.on('disconnected', () => {
    this.logger.warn('Connect mongodb CLOSE');
    Stream.writeLog('Connect mongodb CLOSE');
  });
  mongoose.connection.on('reconnectFailed', () => {
    this.logger.fatal('Retrying to connect to mongo failed !!!!!!');
    Stream.writeLog('Retrying to connect to mongo failed !!!!!!');
    app.close();
  });
};


/**
 * Starts the server
 */
app.start = async function start() {
  this.logger.info('Starting server');
  Stream.writeLog('Starting server');
  await app.warmup();
  app.server.listen(config.port);
};

app.start()
  .catch((err) => {
    app.logger.fatal('Server has crashed');
    Stream.writeLog('Server has crashed', err);
    app.logger.fatal(err);
    process.exit(1);
  });

/**
 * Called after the server has started
 */
app.started = function started() {
  const {
    address,
    port,
  } = this.server.address();
  this.logger.info(`Started listening on ${address}:${port}`);
};

/**
 * Closes the server
 */
app.close = async function close() {
  this.logger.info('Closing server');
  Stream.writeLog('Closing server');
  // Close http server
  await mongoose.disconnect();
  this.logger.info('Connections closed');
  Stream.writeLog('Connections closed');
  app.server.close();
};


/**
 * Called after the server has closed all requests
 */
app.closed = function closed() {
  this.logger.info('Server closed');
  Stream.writeLog('Server closed');
};


// ------------------------------------Middleware-------------------------------------------------------------------
// Lien avec le fichier de routage
app.use('/', api);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());


/**
 *Il protège votre application en configurant différents en-têtes HTTP .
 */
app.use(helmet());

/**
 * Il stocke les données de session sur le serveur;
 *  il enregistre uniquement l'ID de session dans le cookie lui-même,
 *  pas les données de session.
 */
app.use(session({
  secret: 'SECRET_SESSION',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,
  },
}));


module.exports = app;
