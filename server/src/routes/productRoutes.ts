import express, { Request, Response } from 'express';
import { productData } from '../data/productData';
import { ProductType } from '../types/products';

const productRoutes = express.Router();

productRoutes.route('/').get( async (req: Request, res: Response) => {
  try {
    res.json(productData as ProductType[]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

/**
 * Search Endpoint
 * 
 * Check for search term
 * if no search term, return 400 error
 */
productRoutes.route('/search').get( async ( req: Request, res: Response) => {
  try {
    const { filterBy } = req.query;

    if (!filterBy || typeof filterBy !== 'string') {
      return res.status(400).json({ error: 'Invalid or missing search term' });
    }

    const filteredProducts = productData.filter((product) =>
      product.product.toLowerCase().includes(filterBy.toLowerCase())
    );

    res.json(filteredProducts as ProductType[]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
})

export default productRoutes;