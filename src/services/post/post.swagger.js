const postUser = {
  tags: [
    'Users',
  ],
  summary: 'Create new user in DB',
  parameters: [{
    name: 'user',
    in: 'body',
    description: 'User that we want to create',
    schema: {
      $ref: '#/definitions/User',
    },
  }],
  produces: [
    'application/json',
  ],
  responses: {
    200: {
      description: 'New user is created',
      schema: {
        $ref: '#/definitions/User',
      },
    },
  },
};

module.exports = postUser;
