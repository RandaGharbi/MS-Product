import { GraphQLNonNull } from 'graphql';
import { UserToken, signin } from '../../types/UserType';
import User from '../../models/User';

export default {
  type: UserToken,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(signin),
    },
  },
  resolve(_, args, context) {
    console.log(context.scope);
    const { data } = args;
    const { email, password } = data;
    console.log(context, 'context');
    return User.findOne({ email }).then((user) => {
      if (user) {
        if (user.isValidPassword(password)) {
          return {
            token: user.generateJWT().token,
          };
        }
      }
      return null;
    });
  },
};
