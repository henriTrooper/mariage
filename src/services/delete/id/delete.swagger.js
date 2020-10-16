const deleteById = {
  tags: [
    'Users',
  ],
  summary: 'Delete user with given ID',
  description: 'Delete ID',
  operationId: 'deletebyId',
  parameters: [{
    name: 'id',
    in: 'header',
    required: true,
    description: 'ID of user that we want to find',
    type: 'string',
  }],
  responses: {
    200: {
      description: 'User is deleted',
      content: {
        'application/json': {
          schema: {
            $ref: '#/definitions/User',
          },
          example: {
            success: true,
            user: 'user',
          },
        },
      },
    },
    400: {
      description: 'Echec Delete',
      content: {
        'application/json': {
          schema: {
            $ref: '#/definitions/Error',
          },
          example: {
            success: false,
            message: 'Echec Delete',
            options: 'error stack',
          },
        },
      },
    },
  },
};

module.exports = deleteById;
