import mongoose from "mongoose";
import logger from "../utils/logger.js";

class MongoDbContainer {
    constructor(modelName, schema) {
        this.model = mongoose.model(modelName, schema)
    }

    async save(object) {
        try {
            const newDoc = await this.model.create(object);
            return newDoc._id;
        } catch (error) {
            const err = new Error(`No se pudo guardar: ${error}`);
            logger.logError(err);
            throw err;
        }
    }

    async getById(objectId) {
        try {
            const docs = await this.model.find({ _id: objectId }, { __v: 0 })
            if (docs.length != 1 || docs[0] === null || docs[0] === undefined) {
                const err = new Error('404 - No se encontrĂ³ el elemento buscado.')
                logger.logError(err);
                throw err;
            }

            return docs[0];
        } catch (error) {
            const err = new Error(`No se pudo recuperar por id ${objectId}: ${error}`)
            logger.logError(err);
            throw err;
        }
    }

    async getByCondition(condition) {
        try {
            return await this.model.findOne(condition, { __v: 0 });
        } catch (error) {
            const err = new Error(`No se pudo recuperar por condicion ${condition}: ${error}`)
            logger.logError(err);
            throw err;
        }
    }

    async modifyItemById(objectId, newObject) {
        try {
            const result = await this.model.replaceOne({ _id: objectId }, newObject)
            if (!result.acknowledged || result.modifiedCount != 1) {
                const err = new Error('404 - No se encontrĂ³ el elemento a actualizar.')
                logger.logError(err);
                throw err;
            }
        } catch (error) {
            const err = new Error(`No se pudo actualizar por id ${objectId}: ${error}`)
            logger.logError(err);
            throw err;
        }
    }

    async getAll() {
        try {
            return await this.model.find({}, { __v: 0 });
        } catch (error) {
            const err = new Error(`No se pudo recuperar: ${error}`)
            logger.logError(err);
            throw err;
        }
    }

    async deleteById(objectId) {
        try {
            const result = await this.model.deleteOne({ _id: objectId });
            if (!result.acknowledged || result.deletedCount != 1) {
                const err = new Error('404 - No se encontrĂ³ el elemento a borrar.')
                logger.logError(err);
                throw err;
            }
        } catch (error) {
            const err = new Error(`No se pudo eliminar el objeto de id ${objectId}: ${error}`)
            logger.logError(err);
            throw err;
        }
    }

    async deleteAll() {
        try {
            await this.model.deleteMany({});
        } catch (error) {
            const err = new Error(`No se pudieron eliminar todos los elementos: ${error}`)
            logger.logError(err);
            throw err;
        }
    }
}

export default MongoDbContainer;