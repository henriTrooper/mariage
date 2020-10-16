const updateById = {
  tags: [
    'Users',
  ],
  summary: 'Update User',
  description: 'Update user in DB by ID',
  operationId: 'updateUsers',
  parameters: [],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/definitions/User',
        },
      },
    },
    required: true,
  },
  responses: {
    200: {
      description: 'User is updated',
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
      links: {
        update: {
          $ref: '#/definitions/links/update',
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

module.exports = updateById;
