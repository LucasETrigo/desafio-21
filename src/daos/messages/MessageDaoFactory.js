import MongoDbMessagesDao from './MongoDbMessagesDao.js'
import FirebaseMessagesDao from './FirebaseMessagesDao.js'
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv)).argv;
const option = argv.persistence || 'mongo';

let dao
switch (option) {
    case 'mongo':
        dao = new MongoDbMessagesDao()
        break
    case 'firebase':
        dao = new FirebaseMessagesDao()
        break
    default:
        dao = new MongoDbMessagesDao()
}

export default class MessageDaoFactory {
    static getDao() {
        return dao
    }
}