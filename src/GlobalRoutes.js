import  routerProduct from '../src/routes/routeProducts';
import routerCategory from '../src/routes/routesCategory';
export default (app) => {
  app.use('/products', routerProduct);
  app.use('/category', routerCategory);
};