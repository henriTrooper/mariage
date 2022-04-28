const updateByParam = {
  tags: [
    'End Point NON SECURISÉ',
  ],
  summary: 'Update data by Param',
  description: 'Update data in DB by Param',
  operationId: 'updateParam',
  parameters: [{
    name: 'name',
    in: 'header',
    required: true,
    description: 'Name of data that we want to update',
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
      description: 'Data is updated by Param',
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
        updateParam: {
          $ref: '#/definitions/links/updateParam',
        },
      },
    },
    400: {
      description: 'Echec Updated by Param',
      content: {
        'application/json': {
          schema: {
            $ref: '#/definitions/Error',
          },
          example: {
            success: false,
            message: 'Echec Updated by Param',
            options: 'error stack',
          },
        },
      },
    },
  },
};

module.exports = updateByParam;
