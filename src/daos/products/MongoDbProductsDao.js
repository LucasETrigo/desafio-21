import MongoDbContainer from '../../containers/MongoDbContainer.js';
import mongoose from 'mongoose';

class MongoDbProductsDao extends MongoDbContainer {
    constructor() {
        super('products', new mongoose.Schema({
            title: { type: String, required: true },
            price: { type: String, required: true },
            thumbnail: { type: String, required: true }
        }));
    }
}

export default MongoDbProductsDao;