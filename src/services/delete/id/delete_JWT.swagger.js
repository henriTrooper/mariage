const deleteById = {
  tags: [
    'End Point SECURISÉ',
  ],
  summary: 'Delete data with given ID',
  description: 'Delete ID',
  operationId: 'deletebyId',
  parameters: [{
    name: 'id',
    in: 'header',
    required: true,
    description: 'ID of data that we want to find',
    type: 'string',
  }],
  responses: {
    200: {
      description: 'Data is deleted by ID',
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
        deleteID: {
          $ref: '#/definitions/links/deleteID',
        },
      },
    },
    400: {
      description: 'Echec Delete by ID',
      content: {
        'application/json': {
          schema: {
            $ref: '#/definitions/Error',
          },
          example: {
            success: false,
            message: 'Echec Delete by ID',
            options: 'error stack',
          },
        },
      },
    },
  },
};

module.exports = deleteById;
