import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'userType',
  fields: () => ({
    email: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
  }),
});
export const UserToken = new GraphQLObjectType({
  name: 'userToken',
  fields: () => ({
    token: {
      type: GraphQLString,
    },
  }),
});

export const signin = new GraphQLInputObjectType({
  name: 'signinType',
  fields: () => ({
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
  }),
});

export const signupInput = new GraphQLInputObjectType({
  name: 'signupInput',
  fields: () => ({
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    picture: {
      type: GraphQLString,
    },
  }),
});
