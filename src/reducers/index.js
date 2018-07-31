import {combineReducers} from 'redux';
import * as C from '../constants';

import data from './jsondata'

import {usersFetchDataSuccess, usersFetchData} from '../actions/getData'

// const initialState = {
//     initialData: [],
//     data: [],
//     filter: [],
//     loading: false,
//     error: null
// };

const initialState = data;
const friendState = [
    {
        id: 0,
        name:'FRIEND1',
        age: 18,
        phone: '0507445612',
    },
    {
        id: 1,
        name:'FRIEND2',
        age: 28,
        phone: '0507445612',
    },
    {
        id: 2,
        name:'FRIEND3',
        age: 19,
        phone: '0507445612',
    },
    {
        id: 3,
        name:'FRIEND4',
        age: 20,
        phone: '0507445612',
    }
];

// console.log(initialState)


export function search(state = initialState, action) {
    switch (action.type){
        case C.SEARCH_DATA:
            return {
                ...state,
                loading: false,
                result: action.payload.result
            }
        default: return state
    }
}

export function friends(state = friendState, action) {
    switch (action.type){
        case C.ADD_FRIEND:
            return [
                ...state,
                {
                    name: action.friendName,
                    age: action.friendAge,
                    phone: action.friendPhone
                }
            ]
        default: return state
    }
}

export default combineReducers({
    search,
    friends
});




// export function usersHasErrored(state = initialState, action) {
//     switch (action.type) {
//         case C.USERS_HAS_ERRORED:
//             // return action.hasErrored;
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.payload.error,
//                 data: [],
//             }
//         default:
//             return state;
//     }
// }
//
// export function usersIsLoading(state = initialState, action) {
//     switch (action.type) {
//         case C.USERS_IS_LOADING:
//             // return action.isLoading;
//             return {
//                 ...state,
//                 loading: true,
//                 error: null
//             }
//         default:
//             return state;
//     }
// }
//
// export function users(state = initialState, action) {
//     switch (action.type) {
//         case C.USERS_FETCH_DATA_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 initialData: action.payload.users,
//                 // data: this.initialData
//             }
//         // case C.SEARCH_DATA:
//         //     return {
//         //         ...state,
//         //         loading: false,
//         //         initialData: action.payload.result
//         //     }
//
//         default:
//             return state;
//     }
// }

// export function search(state = initialState, action) {
//     switch (action.type){
//         case C.SEARCH_DATA:
//             return {
//                 ...state,
//                 loading: false,
//                 filter: action.payload.result
//             }
//         default: return state
//     }
// }


// export default combineReducers({
//     users,
//     usersHasErrored,
//     usersIsLoading,
//     search
// });