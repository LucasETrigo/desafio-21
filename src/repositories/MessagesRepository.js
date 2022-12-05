import Message from '../models/Message.js'
import MessageDaoFactory from '../daos/messages/MessageDaoFactory.js'

export default class MessagesRepository {
    #dao

    constructor() {
        this.#dao = MessageDaoFactory.getDao()
    }

    async getAll() {
        return await this.#dao.getAll()
    }

    async getById(id) {
        const dto = await this.#dao.getById(id)
        return new Message(dto)
    }

    async add(doc) {
        await this.#dao.save(doc)
    }

    async removeById(id) {
        const removida = await this.#dao.deleteById(id)
        return new Message(removida)
    }

    async removeAll() {
        await this.#dao.deleteAll()
    }
}