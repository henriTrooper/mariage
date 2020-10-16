const postUser = require('./src/services/post/post.swagger');
const getUser = require('./src/services/get/{user}/get.swagger');
const getStart = require('./src/services/get/{started}/get.swagger');
const deleteById = require('./src/services/delete/id/delete.swagger');
const updateById = require('./src/services/update/id/update.swagger');

const register = require('./src/services/post/Auth/register/register.swagger');
const login = require('./src/services/post/Auth/login/login.swagger');

const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'Users',
    description: 'User management API',
    termsOfService: 'https://swagger.io/',
    contact: {
      name: 'Mersch Henri',
      email: 'mersch.henri@icloud.com',
      url: 'https://www.capgemini.com/'
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
    {
      url: 'https://app-dev.herokuapp.com/api/v1',
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
    },
  ],
  security: [{
    ApiKeyAuth: []
  }],
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'x-api-key',
      }
    }
  },
  consumes: [
    'application/json'
  ],
  produces: [
    'application/json'
  ],
  tags: [{
    name: 'Users',
    description: 'API for users in the system'
  }, {
    name: 'Auth',
    description: 'API for authenticate in the system'
  }],
  "paths": {
    "/addUser": {
      post: postUser
    },
    "/": {
      get: getStart
    },
    "/users": {
      get: getUser
    },
    "/user/{id}": {
      parameters: [{
        "name": "id",
        "in": "path",
        "required": true,
        "description": "ID of user that we want to find",
        "type": "string"
      }],
      delete: deleteById,
      put: updateById
    },
    "/register": {
      post: register
    },
    "/login": {
      post: login
    },
    "/profile": {
      get: ""
    }
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
        parameters:{}
      },
      findAll: {
        operationId: "FindAllUsers",
        parameters:{}
      },
      started: {
        operationId: "Started",
        parameters:{}
      },
      update: {
        operationId: "updateUsers",
        parameters:{}
      },
      createProfil: {
        operationId: "createProfilUser",
        parameters:{}
      },
      login: {
        operationId: "loginUser",
        parameters:{}
      },
    }
  }
}


module.exports = swaggerDocument;