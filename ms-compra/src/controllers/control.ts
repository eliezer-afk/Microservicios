import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

export class ProductController {
    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    public async getProducts(req: Request, res: Response): Promise<Response> {
        const products = await this.productService.getAllProducts();
        return res.json(products);
    }
}
