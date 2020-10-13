const deleteById = {
    "summary": "Delete user with given ID",
    "tags": [
        "Users"
    ],
    "responses": {
        "200": {
            "description": "User is deleted",
            "schema": {
                "$ref": "#/definitions/User"
            }
        }
    }
}

module.exports = deleteById;