// NON SECURISE
const postUser = require('./src/services/post/post.swagger');

const getUser = require('./src/services/get/{user}/get.swagger');
const getStart = require('./src/services/get/{started}/get.swagger');

const deleteById = require('./src/services/delete/id/delete.swagger');
const deleteByParam = require('./src/services/delete/param/delete.swagger');
const purgeDB = require('./src/services/delete/purge/delete.swagger');

const updateById = require('./src/services/update/id/update.swagger');
const updateByParam = require('./src/services/update/param/update.swagger');

const register = require('./src/services/post/Auth/register/register.swagger');
const login = require('./src/services/post/Auth/login/login.swagger');

// SECURISE
const postUser_JWT = require('./src/services/post/post_JWT.swagger');

const getUser_JWT = require('./src/services/get/{user}/get_JWT.swagger');

const deleteById_JWT = require('./src/services/delete/id/delete_JWT.swagger');
const deleteByParam_JWT = require('./src/services/delete/param/delete_JWT.swagger');
const purgeDB_JWT = require('./src/services/delete/purge/delete_JWT.swagger');

const updateById_JWT = require('./src/services/update/id/update_JWT.swagger');
const updateByParam_JWT = require('./src/services/update/param/update_JWT.swagger');




const {
  app,
} = require('./index');


const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'API GENERIQUE FOR ANGULAR FORMATION',
    description: 'User management API',
    termsOfService: 'https://swagger.io/',
    contact: {
      name: 'Mersch Henri',
      email: 'henri.mersch@capgemini.com',
      url: 'https://www.capgemini.com/fr-fr/'
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    }
  },
  servers: [{
    url: 'http://localhost:3000/api',
    description: 'LOCAL server'
  },
    /* {
      url: 'http://testapplication-env.eba-ymzz7z5z.us-east-1.elasticbeanstalk.com/api',
      description: 'DEV server'
    },
    {
      url: "https://{env}.gigantic-server.com:{port}/{basePath}",
      description: "API server",
      variables: {
        "env": {
          "default": "app-dev",
          "description": "DEV Environment"
        },
        port: {
          "enum": [
            "8443",
            "3000",
            "443"
          ],
          "default": "8443"
        },
        basePath: {
          "default": "v1"
        }
      }
    }, */
  ],
  security: [{
    bearerAuth: []
  }],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      }
    }
  },
  consumes: [
    'application/json'
  ],
  produces: [
    'application/json'
  ],
  tags: [
    {
      name: 'Auth',
      description: 'API for authenticate in the system'
    },
    {
      name: 'End Point NON SECURISÉ',
      description: ''
    },
    {
      name: 'End Point SECURISÉ',
      description: ''
    },
    {
      name: 'Other',
      description: '',
    }],
  "paths": {
    "/addUser": {
      post: postUser
    },
    "/addUser_JWT": {
      post: postUser_JWT 
    },
    "/": {
      get: getStart
    },
    "/users": {
      get: getUser
    },
    "/users_JWT": {
      get: getUser_JWT
    },
    "/user/id/{id}": {
      delete: deleteById,
      put: updateById
    },
    "/user_JWT/id/{id}": {
      delete: deleteById_JWT,
      put: updateById_JWT
    },
    "/user_JWT/id/{id}": {
      delete: deleteById_JWT,
      put: updateById_JWT
    },
    "/user/param/{param}": {
      delete: deleteByParam,
      put: updateByParam
    },
    "/user_JWT/param/{param}": {
      delete: deleteByParam_JWT,
      put: updateByParam_JWT
    },
    "/user/purgeDB": {
      delete: purgeDB
    },
    "/user/purgeDB_JWT": {
      delete: purgeDB_JWT
    },
    "/register": {
      post: register
    },
    "/login": {
      post: login
    },
  },
  "definitions": {
    User: {
      required: [
        "name",
        "isPublic"
      ],
      properties: {
        isPublic: {
          "type": "boolean"
        },
        name: {
          type: "string"
        },
        description: {
          type: "string"
        },
        carriere: {
          type: "array",
          items: {
            "type": "object",
            properties: {
              compagnie: {
                "type": "integer",
                "format": "int32"
              },
              date: {
                type: "string",
                format: "date"
              }
            }
          }
        },
        collegues: {
          type: "array",
          items: {
            type: "string"
          }
        }
      }
    },
    Users: {
      type: "array",
      $ref: "#/definitions/User"
    },
    Profil: {
      required: [
        "username",
        "email",
        "password",
        "passwordConfirmation"
      ],
      "properties": {
        username: {
          "type": "string"
        },
        email: {
          "type": "string"
        },
        password: {
          "type": "string"
        },
        passwordConfirmation: {
          "type": "string"
        },
      }
    },
    Login: {
      required: [
        "email",
        "password",
      ],
      properties: {
        email: {
          "type": "string"
        },
        password: {
          "type": "string"
        }
      },
    },
    OnceParam: {
      required: [
        "name",
      ],
      properties: {
        name: {
          "type": "string"
        },
      },
    },
    Error: {
      type: 'object',
      properties: {
        sucess: {
          type: 'boolean'
        },
        message: {
          type: 'string'
        },
        optional: {
          type: 'string'
        }
      }
    },
    links: {
      create: {
        operationId: "createUsers",
        parameters: {}
      },
      findAll: {
        operationId: "FindAllUsers",
        parameters: {}
      },
      started: {
        operationId: "Started",
        parameters: {}
      },
      updateID: {
        operationId: "updateID",
        parameters: {}
      },
      updateParam: {
        operationId: "updateParam",
        parameters: {}
      },
      deleteID: {
        operationId: "deletebyId",
        parameters: {}
      },
      deleteParam: {
        operationId: "deletebyParam",
        parameters: {}
      },
      purgeDB: {
        operationId: "purgeDB",
        parameters: {}
      },
      createProfil: {
        operationId: "createProfilUser",
        parameters: {}
      },
      login: {
        operationId: "loginUser",
        parameters: {}
      },
    }
  }
}


module.exports = swaggerDocument;