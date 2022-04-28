const purgeDB = {
  tags: [
    'End Point SECURISÉ',
  ],
  summary: 'Purge Database',
  description: 'Purge Database',
  operationId: 'purgeDB',
  parameters: [],
  responses: {
    200: {
      description: 'Database is purged',
      content: {
        'application/json': {
          example: {
            success: true,
            message: 'Count document deleted',
          },
        },
      },
      links: {
        purgeDB: {
          $ref: '#/definitions/links/purgeDB',
        },
      },
    },
    400: {
      description: 'Echec Purged',
      content: {
        'application/json': {
          schema: {
            $ref: '#/definitions/Error',
          },
          example: {
            success: false,
            message: 'Echec Purged',
            options: 'error stack',
          },
        },
      },
    },
  },
};

module.exports = purgeDB;
