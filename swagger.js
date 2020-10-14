const postUser = require('./src/services/post/post.swagger');
const getUser = require('./src/services/get/{user}/get.swagger');
const getStart = require('./src/services/get/{started}/get.swagger');
const deleteById = require('./src/services/delete/id/delete.swagger');
const updateById = require('./src/services/update/id/update.swagger');

const swaggerDocument = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'My User Project CRUD',
    description: 'My User Project Application API',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT '
    }
  },
  servers: [{
      url: 'http://localhost:3000/api',
      description: 'Local server'
    },
    {
      url: 'https://app-dev.herokuapp.com/api/v1',
      description: 'DEV Env'
    },
    {
      url: "https://{env}.gigantic-server.com:{port}/{basePath}",
      description: "The production API server",
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
  components: {
    schemas: {},
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  schemes: [
    'http'
  ],
  consumes: [
    'application/json'
  ],
  produces: [
    'application/json'
  ],
  tags: [{
    name: 'Users',
    description: 'API for users in the system'
  }],
  "paths": {
    "/api/addUser": {
      "post": postUser
    },
    "/api": {
      "get": getStart
    },
    "/api/users": {
      "get": getUser
    },
    "/api/user/{id}": {
      "parameters": [{
        "name": "id",
        "in": "path",
        "required": true,
        "description": "ID of user that we want to find",
        "type": "string"
      }],
      "delete": deleteById,
      "put": updateById
    }
  },
  "definitions": {
    "User": {
      "required": [
        "name",
        "isPublic"
      ],
      "properties": {
        "isPublic": {
          "type": "boolean"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "carriere": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "compagnie": {
                "type": "number"
              },
              "date": {
                "type": "string"
              }
            }
          }

        },
        "collegues": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "updateUser": {
      "required": [
        "name",
        "isPublic"
      ],
      "properties": {
        "isPublic": {
          "type": "boolean"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "carriere": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "compagnie": {
                "type": "number"
              },
              "date": {
                "type": "string"
              }
            }
          }

        },
        "collegues": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "Users": {
      "type": "array",
      "$ref": "#/definitions/User"
    }
  }
}

module.exports = swaggerDocument;