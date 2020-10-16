const express = require('express');
const mongoose = require('mongoose');
const {
  Server,
} = require('http');
const helmet = require('helmet');
const session = require('express-session');
const bodyParser = require('body-parser');
const Logger = require('./src/utils/logger');
const api = require('./src/router/router');
const cors = require('cors');

// Mise en place de Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

const app = express();
app.logger = Logger;
app.server = new Server(app);

// Sécurité
app.set('trust proxy', 1); // trust first proxy


// ------------------------------------Connection MONGODB-------------------------------------------------------------------

async function connectMongo(reconnectTries = process.env.reconnectTries, reconnectInterval = process.env.reconnectInterval) {
  try {
    await mongoose.connect(process.env.URI_MONGODB, {
      keepAlive: process.env.keepAlive,
      useNewUrlParser: process.env.useNewUrlParser,
      useCreateIndex: process.env.useCreateIndex,
      useFindAndModify: process.env.useFindAndModify,
      useUnifiedTopology: process.env.useUnifiedTopology,
      poolSize: process.env.poolSize,
    });
  } catch (err) {
    await new Promise((success, reject) => {
      if (reconnectTries > 0) {
        app.logger.warn('Retrying to connect to mongo');
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
  await connectMongo(process.env.reconnectTries, process.env.reconnectInterval);
  this.logger.info('Connect mongodb OPEN');

  mongoose.connection.on('disconnected', () => {
    this.logger.warn('Connect mongodb CLOSE');
  });
  mongoose.connection.on('reconnectFailed', () => {
    this.logger.fatal('Retrying to connect to mongo failed !!!!!!');
    app.close();
  });
};


/**
 * Starts the server
 */
app.start = async function start() {
  this.logger.info('Starting server');
  await app.warmup();
  app.server.listen(process.env.port);
};

app.start()
  .catch((err) => {
    app.logger.fatal('Server has crashed');
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
  // Close http server
  await mongoose.disconnect();
  this.logger.info('Connections closed');
  app.server.close();
};


/**
 * Called after the server has closed all requests
 */
app.closed = function closed() {
  this.logger.info('Server closed');
};


// ------------------------------------Middleware-------------------------------------------------------------------

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

let corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

// Lien avec le fichier de routage
app.use('/api', api);

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
  secret: process.env.JWT_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,
  },
}));

//Route de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports = app;