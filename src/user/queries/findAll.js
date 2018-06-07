import { GraphQLList } from 'graphql';
import { UserToken } from '../../types/UserType';
// import User from '../../models/User';

export default {
  type: new GraphQLList(UserToken),
  resolve() {
    return 'hello';
  },
};
