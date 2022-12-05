import { Router } from 'express';
import logger from '../utils/logger.js';
import { getAllProducts, getProductById, updateProductById, deleteAllProducts, deleteProductById, addProduct } from "../controllers/productController.js";

const productRouter = new Router();

productRouter.get("/", logger.logReqInfo, getAllProducts);
productRouter.get("/:id", logger.logReqInfo, getProductById);
productRouter.put("/:id", logger.logReqInfo, updateProductById);
productRouter.delete("/:id", logger.logReqInfo, deleteProductById);
productRouter.delete("/", logger.logReqInfo, deleteAllProducts);
productRouter.post("/", logger.logReqInfo, addProduct);

export default productRouter;