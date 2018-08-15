import * as actions from '../constants/actions';

export function setUsers(users) {
    return{
        type: actions.USERS_SET,
        users
    }
}

export function sortUser(sort) {
    return{
        type: actions.USER_SORT,
        sort
    }
}

export function activeUser(user) {
    return {
        type: actions.USER_ACTIVE,
        user
    }
}
export function searchUser(filter){
    return {
        type: actions.USER_SEARCH,
        filter
    }

}