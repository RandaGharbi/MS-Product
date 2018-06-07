import { UserType } from '../../types/UserType';
import authenticated from '../../permission';
// import User from '../../models/User';

export default {
  type: UserType,
  resolve: authenticated.createResolver((parent, args, context) => {
    const { user: { id } } = context;
    console.log(id);
    // return User.findById({ id });
  }),
};
