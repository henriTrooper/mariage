const express = require('express');
const 
  MongoClient
 = require('mongodb').MongoClient;
const {
  Server,
} = require('http');
const helmet = require('helmet');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
// Mise en place de Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const Logger = require('./src/utils/logger');
const api = require('./src/router/router');

const app = express();
app.logger = Logger;
app.server = new Server(app);

// Sécurité
app.set('trust proxy', 1); // trust first proxy

const port = process.env.PORT || 3000;


const url = '';


// ------------------------------------Connection MONGODB-------------------------------------------------------------------

async function connectMongo() {
  const uri = 'mongodb+srv://henri:interdit@config-base.lboaa.mongodb.net/config_Base?retryWrites=true&w=majority';
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect((err) => {
    if (err) {
      Logger.warn('Failed Connected');
    }
    client.db('config_Base').collection('datas');
    Logger.info('Connect mongodb OPEN');
    // perform actions on the collection object
  });
  client.close();
}

// ------------------------------------Mise en route du server-------------------------------------------------------------------

app.server.on('close', () => app.closed());
app.server.on('listening', () => app.started());
app.server.on('error', (err) => app.logger.fatal(err));

/**
 * Called before starting the web server
 */
app.warmup = async function warmup() {
  this.logger.info('loading...Connecting to mongo ');
  await connectMongo();
};

/**
 * Starts the server
 */
app.start = async function start() {

  this.logger.info('Starting server on ', process.env.urlProd);
  await app.server.listen(port);
  await app.warmup();
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
  } = this.server.address();
  this.logger.info(`Started listening on ${address}:${port}`);
};

/**
 * Closes the server
 */
app.close = async function close() {
  this.logger.info('Closing server');
  // Close http server
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
  extended: false,
}));

// parse application/json
app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/src/public/dist/regiment/"));

const corsOptions = {
  origin: process.env.urlProd,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

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

// Route de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
