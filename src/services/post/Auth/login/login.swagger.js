const login = {
  tags: [
    'Auth',
  ],
  summary: 'Login',
  description: 'Login in UI',
  operationId: 'loginUser',
  parameters: [],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/definitions/Login',
        },
      },
    },
    required: true,
  },
  responses: {
    200: {
      description: 'Login',
      content: {
        'application/json': {
          schema: {
            $ref: '#/definitions/Login',
          },
          example: {
            success: true,
            token: 'json_token',
          },
        },
      },
      links: {
        login: {
          $ref: '#/definitions/links/login',
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

module.exports = login;
