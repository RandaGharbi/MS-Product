import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const User = new Schema({
  name: String,
  email: {
    lowercase: true,
    type: String,
    unique: true,
  },
  scope: [],
  password: String,
  picture: String,
});

User.methods.setPassword = function setPassword(password) {
  this.password = bcrypt.hashSync(password, 10);
};
User.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.password);
};
User.methods.generateJWT = function generateJWT() {
  const { _id, email, scope } = this;
  const token = jwt.sign({
    _id,
    email,
    scope,
  }, process.env.JWT_SECRET);
  return {
    token,
  };
};

export default mongoose.model('users', User);
