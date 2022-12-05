import FirebaseContainer from '../../containers/FirebaseContainer.js';

class FirebaseUsersDao extends FirebaseContainer {
    constructor() {
        super('users');
    }
}

export default FirebaseUsersDao;