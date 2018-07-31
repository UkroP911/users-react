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

export default combineReducers({
    search
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