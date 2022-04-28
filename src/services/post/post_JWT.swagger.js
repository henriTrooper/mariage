const postUser = {
  tags: [
    'End Point SECURISÉ',
  ],
  summary: 'Create Data',
  description: 'Create new data in DB',
  operationId: 'createUsers',
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
      description: 'Success Created',
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
        create: {
          $ref: '#/definitions/links/create',
        },
      },
    },
    400: {
      description: 'Echec Created',
      content: {
        'application/json': {
          schema: {
            $ref: '#/definitions/Error',
          },
          example: {
            success: false,
            message: 'Echec Created',
            options: 'error stack',
          },
        },
      },
    },
  },
};

module.exports = postUser;
