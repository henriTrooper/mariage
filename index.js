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

const port = process.env.PORT || 3000;
/* const http = require('http');
const fs = require('fs');
const html = fs.readFileSync('index.html');

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
}; */

/* var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = '';

        req.on('data', function(chunk) {
            body += chunk;
        });

        req.on('end', function() {
            if (req.url === '/') {
                log('Received message: ' + body);
            } else if (req.url = '/scheduled') {
                log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
            }

            res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
            res.end();
        });
    } else {
        res.writeHead(200);
        res.write(html);
        res.end();
    }
}); */

// Listen on port 3000, IP defaults to 127.0.0.1
//server.listen(port);

// Put a friendly message on the terminal
//console.log('Server running at http://127.0.0.1:' + port + '/');


// ------------------------------------Connection MONGODB-------------------------------------------------------------------

/* URI_MONGODB="mongodb+srv://henri:interdit@config-base.lboaa.mongodb.net/config_Base?retryWrites=true&w=majority"

reconnectTries=10
reconnectInterval=1000
poolSize=20
keepAlive=true
useNewUrlParser=true
useCreateIndex=true
useFindAndModify=false
useUnifiedTopology=true */

async function connectMongo() {
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://henri:interdit@config-base.lboaa.mongodb.net/config_Base?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });
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
    app.server.listen(port);
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
    } = app.server.address();
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
