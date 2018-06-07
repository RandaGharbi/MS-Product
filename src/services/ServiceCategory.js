import Category from '../models/category';
import express from 'express';

const router = express.Router();

export async function addCategory(data) {
  try {
    const category = await Category.create(data)
      return category;
  } catch (error) {
      console.log('error add', error)
      return error;
    }
};

export async function getAllCategories() {
  try {
    const categories = await Category.find().lean();
    return categories;
  }
  catch (error) {
    console.log(error);
    return error;
    }
}