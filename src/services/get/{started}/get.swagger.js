const started = {
  tags: [
    'Users',
  ],
  summary: 'Started Road',
  description: 'Get started',
  operationId: 'getStarted',
  parameters: [],
  responses: {
    200: {
      description: 'Started way',
      content: {
        'application/json': {
          schema: {
            $ref: '#/definitions/Users',
          },
          example: {
            users: 'users[]',
          },
        },
      },
      links: {
        started: {
          $ref: '#/definitions/links/started',
        },
      },
    },
    400: {
      description: 'Echec Started',
      content: {
        'application/json': {
          schema: {
            $ref: '#/definitions/Error',
          },
          example: {
            success: false,
            message: 'Echec Started',
            options: 'error stack',
          },
        },
      },
    },
  },
};

module.exports = started;
