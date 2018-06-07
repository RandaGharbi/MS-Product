import Product from '../models/product';
import express from 'express';
import { map } from 'lodash';

const router = express.Router();

export async function addProduct(data) {
  try {
    const product = await Product.create(data)
      return product;
  } catch (error) {
      console.log('error add', error)
      return error;
    }
};

export async function getAllProducts() {
  try {
    const products = await Product.find().lean();
    return products;
  }
  catch (error) {
    console.log(error);
    return error;
    }
}

export async function getProductsBycategory(categories_id) {
  const ids = map(categories_id, cat => cat.category_id);
  try {
    const ProductCategoryRow = Product.find({category_id: {$in :ids }});
    return ProductCategoryRow;
    }
  
  catch (error) {
    console.log(error);
    return error;
    }
}