const register = {
  tags: [
    'Auth',
  ],
  summary: 'Create Profil',
  description: 'Create new Profil in DB',
  operationId: 'createProfilUser',
  parameters: [],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/definitions/Profil',
        },
      },
    },
    required: true,
  },
  responses: {
    200: {
      description: 'Profil is created',
      content: {
        'application/json': {
          schema: {
            $ref: '#/definitions/Profil',
          },
          example: {
            success: true,
            profil: 'profil',
          },
        },
      },
      links: {
        createProfil: {
          $ref: '#/definitions/links/createProfil',
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

module.exports = register;
