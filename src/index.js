import express from 'express';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import env from 'dotenv';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import routes from '../src/GlobalRoutes';

env.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/printest', () => console.log('CONNECT DB MONGOOSE...'));

app.use((req, res, next) => {
  const header = req.headers.authorization;
  if (header) {
    try {
      const token = header.split(' ')[1];
      const { _id } = jwt.verify(token, process.env.JWT_SECRET);
      req.user = { _id };
    } catch (err) {
      console.log(err);
    }
  }
  next();
});
routes(app);
// GraphQL API
app.use('/graphql', cors(), graphqlHTTP(req => ({
  schema,
  graphiql: true,
  pretty: true,
  context: {
    user: req.user,
  },
})));
app.listen(process.env.PORT, () => console.log(`Running on port... ${process.env.PORT}`));
