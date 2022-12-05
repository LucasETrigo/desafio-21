import FirebaseContainer from '../../containers/FirebaseContainer.js';

class FirebaseMessagesDao extends FirebaseContainer {
    constructor() {
        super('messages');
    }
}

export default FirebaseMessagesDao;