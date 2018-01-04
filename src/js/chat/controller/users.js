// @flow

import {users} from '../model/users';
import usersView from '../view/users';

const usersController = () => {
    usersView('#users', users);
};

export default usersController;

