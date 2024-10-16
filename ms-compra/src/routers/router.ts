import { Router } from 'express';
import { ProductController } from '../controllers/control';

const router = Router();
const productController = new ProductController();

router.get('/products', productController.getProducts.bind(productController));

export default router;
