const started = {
  tags: [
    'Users',
  ],
  summary:"Started Road",
  description: 'Get started',
  operationId: 'getStarted',
  parameters: [],
  parameters: [],
  responses: {
      200:  {
        description: 'Started way',
        content: {
          'application/json': {
            schema: {
              $ref: '#/definitions/Users'
            },
            example: {
              success: true,
              user: "users"
            }
          }
        },
        links: {
          started: {
              $ref: '#/definitions/links/started'
            }
        }
      },
    400: {
      description: 'Echec Delete',
      content: {
        'application/json': {
          schema: {
            $ref: '#/definitions/Error'
          },
          example: {
            success: false,
            message: 'Echec Delete',
            options: "error stack"
          }
        }
      }
    }
  }
}

module.exports = started;
