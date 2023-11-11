import express, { NextFunction, Request, Response } from 'express';
import productRoutes from './routes/productRoutes';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors()); 
app.listen(port, () => {
  console.log(`storm server is running on port ${port}.`);
});

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'welcome to the storm api' });
});

app.use('/products', productRoutes);

// Global error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});