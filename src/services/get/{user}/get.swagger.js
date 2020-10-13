const getUser = {
  "tags": [
    "Users"
  ],
  "summary": "Get all users in system",
  "responses": {
    "200": {
      "description": "OK",
      "schema": {
        "$ref": "#/definitions/Users"
      }
    }
  }
}

module.exports = getUser;