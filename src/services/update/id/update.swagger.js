const updateById = {
  tags: [
    'Users',
  ],
  summary: 'Update Data by ID',
  description: 'Update data in DB by ID',
  operationId: 'updateID',
  parameters: [{
    name: 'id',
    in: 'header',
    required: true,
    description: 'ID of data that we want to update',
    type: 'string',
  }],
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
      description: 'Data is updated by ID',
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
        updateID: {
          $ref: '#/definitions/links/updateID',
        },
      },
    },
    400: {
      description: 'Echec Updated by ID',
      content: {
        'application/json': {
          schema: {
            $ref: '#/definitions/Error',
          },
          example: {
            success: false,
            message: 'Echec Updated by ID',
            options: 'error stack',
          },
        },
      },
    },
  },
};

module.exports = updateById;
