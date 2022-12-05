import MongoDbUsersDao from './MongoDbUsersDao.js'
import FirebaseUsersDao from './FirebaseUsersDao.js'
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv)).argv;
const option = argv.persistence || 'mongo';

let dao
switch (option) {
    case 'mongo':
        dao = new MongoDbUsersDao()
        break
    case 'firebase':
        dao = new FirebaseUsersDao()
        break
    default:
        dao = new MongoDbUsersDao()
}

export default class PersonasDaoFactory {
    static getDao() {
        return dao
    }
}