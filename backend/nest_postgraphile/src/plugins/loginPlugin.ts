export default (builder) => {
  builder.hook(
    'GraphQLObjectType:fields',
    (fields, build, { scope: { isRootMutation } }) => {
      if (!isRootMutation) return fields;

      const { GraphQLString } = build.graphql;

      return {
        ...fields,
        login: {
          type: GraphQLString,
          args: {
            email: {
              type: GraphQLString,
            },
            password: {
              type: GraphQLString,
            },
          },
          resolve: async (_, { email, password }, { pgClient }) => {
            const result = await pgClient.query(
              `SELECT * FROM "user" WHERE email = $1 LIMIT 1`,
              [email],
            );

            const user = result.rows[0];
            if (!user || user.password !== password) {
              throw new Error('Invalid credentials');
            }

            const token = 'test-jwt-token';
            return token;
          },
        },
      };
    },
  );
};
