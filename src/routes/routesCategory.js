import { addCategory, getAllCategories }  from '../services/ServiceCategory';
import express from 'express';

const routerCategory = express.Router();

routerCategory.post('/add', (req, res) => {  
  console.log('reqqqqqqqqqqqqqqqqqqqq', req.body)
  const data = req.body.data;
  if (data.length === 0 || !data) {
    const msg = 'Missing category Data!';
    const status = 'failed';
    return res.json({ status, message: msg });
  }
  
  addCategory(data).then((result) => {
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

routerCategory.get('/allCategories', (req, res) => {
  getAllCategories().then((result) => {
    const msg = 'get all categories successfully!';
    const status = 'success';
    return res.json({ status, message: msg, data: result });
  }).catch((err) => {
    const msg = err;
    const status = 'failed';
    return res.json({ status, message: msg });
  });
  return true;
});


export default routerCategory;