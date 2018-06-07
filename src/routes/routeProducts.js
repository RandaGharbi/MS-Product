import { addProduct, getAllProducts, getProductsBycategory }  from '../services/ServiceProduct';
import express from 'express';

const routerProduct = express.Router();

routerProduct.post('/add', (req, res) => {  
  const data = req.body.data;
  if (data.length === 0 || !data) {
    const msg = 'Missing product Data!';
    const status = 'failed';
    return res.json({ status, message: msg });
  }
  
  addProduct(data).then((result) => {
    const msg = 'Insert successfully!';
    const status = 'success';
    return res.json({ status, message: msg, data: result });
  }).catch((err) => {
    const msg = err;
    const status = 'failed';
    return res.json({ status, message: msg });
  });
  return true;
});

routerProduct.get('/allProducts', (req, res) => {
  getAllProducts().then((result) => {
    const msg = 'get all products successfully!';
    const status = 'success';
    return res.json({ status, message: msg, data: result });
  }).catch((err) => {
    const msg = err;
    const status = 'failed';
    return res.json({ status, message: msg });
  });
  return true;
});

routerProduct.post('/getProductsbyCategory', (req, res) => {
  const categories_id = req.body;
  getProductsBycategory(categories_id).then((result) => {
    const msg = 'get all products successfully!';
    const status = 'success';
    console.log('categories_idcategorityiesidcategories_id', result)

    return res.json({ status, message: msg, ProductsBycategory: result });
  }).catch((err) => {
    const msg = err;
    const status = 'failed';
    return res.json({ status, message: msg });
  });
  return true;
});

export default routerProduct;