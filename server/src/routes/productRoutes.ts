import express, { Request, Response } from 'express';
import { productData } from '../data/productData';
import { ProductType } from '../types/products';

const productRoutes = express.Router();

productRoutes.route('/').get( async (req: Request, res: Response) => {
  try {
    let productList: ProductType[] = productData;
    res.json(productList);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

export default productRoutes;