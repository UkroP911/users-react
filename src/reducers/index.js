import {combineReducers} from 'redux';
import * as C from '../constants';


export function usersHasErrored(state = false, action) {
    switch (action.type) {
        case C.USERS_HAS_ERRORED:
            return action.hasErrored;

        default:
            return state;
    }
}

export function usersIsLoading(state = false, action) {
    switch (action.type) {
        case C.USERS_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function users(state = [], action) {
    switch (action.type) {
        case C.USERS_FETCH_DATA_SUCCESS:
            return action.users;

        default:
            return state;
    }
}

export default combineReducers({
    users,
    usersHasErrored,
    usersIsLoading
});