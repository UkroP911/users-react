import * as actions from '../constants/actions';
const INITIAL_STATE = {
    initialData: {},
    users: {},
    // activeUser: {}
};

const applySetUsers = (state, action) => ({
    ...state,
    initialData: action.users,
    users: [...action.users]

});

function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.USERS_SET:{
            return applySetUsers(state, action)
        }
        case actions.USER_SORT:{
            return {
                ...state,
                users: action.sort
            }
        }
        case actions.USER_ACTIVE:{
            return {
                ...state,
                activeUser: action.user.activeUser
            }
        }
        case actions.USER_SEARCH:{
            return {
                ...state,
                users: action.filter
            }

        }
        default: return state;
    }
}

export default userReducer;