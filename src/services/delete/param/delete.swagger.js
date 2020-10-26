const deleteByParam = {
  tags: [
    'Users',
  ],
  summary: 'Delete data with given Param',
  description: 'Delete by Param',
  operationId: 'deletebyParam',
  parameters: [],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/definitions/OnceParam',
        },
      },
    },
    required: true,
  },
  responses: {
    200: {
      description: 'Data is deleted',
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
        deleteParam: {
          $ref: '#/definitions/links/deleteParam',
        },
      },
    },
    400: {
      description: 'Echec Delete by Param',
      content: {
        'application/json': {
          schema: {
            $ref: '#/definitions/Error',
          },
          example: {
            success: false,
            message: 'Echec Delete by Param',
            options: 'error stack',
          },
        },
      },
    },
  },
};

module.exports = deleteByParam;
