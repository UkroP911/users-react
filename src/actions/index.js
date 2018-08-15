import {setUsers} from './user.action';
import {sortUser} from './user.action';
import {activeUser} from './user.action';
import {searchUser} from './user.action';


const rootAction = {
    setUsers,
    sortUser,
    activeUser,
    searchUser
};

export default rootAction;