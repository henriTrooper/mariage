const getUser = {
  tags: [
    'End Point NON SECURISÉ',
  ],
  summary: 'Find All data',
  description: 'Find all data in DB',
  operationId: 'FindAllUsers',
  parameters: [],
  responses: {
    200: {
      description: 'All Data Find',
      content: {
        'application/json': {
          schema: {
            $ref: '#/definitions/Users',
          },
          example: {
            success: true,
            user: 'users',
          },
        },
      },
      links: {
        findAll: {
          $ref: '#/definitions/links/findAll',
        },
      },
    },
    400: {
      description: 'Echec Find All Data',
      content: {
        'application/json': {
          schema: {
            $ref: '#/definitions/Error',
          },
          example: {
            success: false,
            message: 'Echec Find All Data',
            options: 'error stack',
          },
        },
      },
    },
  },
};

module.exports = getUser;
