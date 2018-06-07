import { GraphQLNonNull } from 'graphql';
import { UserToken, signupInput } from '../../types/UserType';
import User from '../../models/User';

export default {
  type: UserToken,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(signupInput),
    },
  },
  resolve(_, args) {
    const { data } = args;
    const { password } = data;
    const user = new User(data);
    user.setPassword(password);
    return user
      .save()
      .then(userRecord => ({
        userToken: userRecord.generateJWT(),
      }))
      .catch(error => error);
  },
};
