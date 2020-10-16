const getUser = {
  tags: [
    'Users',
  ],
  summary: 'Find users',
  description: 'Find all users in DB',
  operationId: 'FindAllUsers',
  parameters: [],
  responses: {
    200: {
      description: 'All User Find',
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

module.exports = getUser;
