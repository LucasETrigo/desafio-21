import ProductsRepository from "../repositories/ProductsRepository.js";
import logger from "../utils/logger.js";

const productsRepo = new ProductsRepository();

const getAllProducts = async (req, res) => {
    try {
        const products = await productsRepo.getAll();
        res.json(products);
    } catch (error) {
        logger.logError(error)

        res.status(500);
        res.json({ error: -1, descripcion: 'error al listar los productos' });
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await productsRepo.getById(req.params.id);
        res.json(product);
    } catch (error) {
        logger.logError(error);

        if (error.message.includes('404'))
            res.status(404);
        else
            res.status(500);
        res.json({ error: -2, descripcion: 'producto no encontrado' });
    }
}

const updateProductById = async (req, res) => {
    try {
        await productsRepo.modifyById(req.params.id, req.body);
        res.status(204);
        res.send();
    } catch (error) {
        logger.logError(error);

        if (error.message.includes('404'))
            res.status(404);
        else
            res.status(500);

        res.json({ error: -4, descripcion: 'error al actualizar producto' });
    }
}

const deleteAllProducts = async (req, res) => {
    try {
        const products = await productsRepo.removeAll();
        res.json(products);
    } catch (error) {
        logger.logError(error)

        res.status(500);
        res.json({ error: -1, descripcion: 'error al borrar los productos' });
    }
}

const deleteProductById = async (req, res) => {
    try {
        await productsRepo.removeById(req.params.id);
        res.status(204);
        res.send();
    } catch (error) {
        logger.logError(error);

        if (error.message.includes('404'))
            res.status(404);
        else
            res.status(500);

        res.json({ error: -5, descripcion: 'error al borrar producto' });
    }
}

const addProduct = async (req, res) => {
    try {
        const id = await productsRepo.add(req.body);
        res.json({ id });
    } catch (error) {
        logger.logError(error);

        res.status(500);
        res.json({ error: -3, descripcion: 'error al guardar producto' });
    }
}

export { getAllProducts, getProductById, updateProductById, deleteAllProducts, deleteProductById, addProduct }