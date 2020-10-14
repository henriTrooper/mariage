const updateById = {
  summary: 'Update user with give ID ',
  tags: [
    'Users',
  ],
  parameters: [{
    name: 'user',
    in: 'body',
    description: 'User with new values of properties',
    schema: {
      $ref: '#/definitions/updateUser',
    },
  }],
  responses: {
    200: {
      description: 'User is updated',
      schema: {
        $ref: '#/definitions/User',
      },
    },
  },
};

module.exports = updateById;
