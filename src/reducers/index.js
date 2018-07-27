import {combineReducers} from 'redux';
import * as C from '../constants';
import {usersFetchDataSuccess} from "../actions/getData";

//
// const initialState = [{
//         name: 'Sarah Martin',
//         age: 45,
//         phone: 12354,
//         avatar: 'https://randomuser.me/api/portraits/thumb/women/53.jpg',
//         avatarLarge: 'https://randomuser.me/api/portraits/women/53.jpg',
//         id: 1
//     },
//     {
//         name: 'آدرینا قاسمی',
//         age: 25,
//         phone: 456826,
//         avatar: 'https://randomuser.me/api/portraits/thumb/women/73.jpg',
//         avatarLarge: 'https://randomuser.me/api/portraits/women/73.jpg',
//         id: 2
//     },
//     {
//         name: 'Jeanne Dupuis',
//         age: 32,
//         phone: 1456998,
//         avatar: 'https://randomuser.me/api/portraits/thumb/women/96.jpg',
//         avatarLarge: 'https://randomuser.me/api/portraits/women/96.jpg',
//         id: 3
//     },
//     {
//         name: 'Andreia Thomas',
//         age: 24,
//         phone: 4135462,
//         avatar: 'https://randomuser.me/api/portraits/thumb/women/3.jpg',
//         avatarLarge: 'https://randomuser.me/api/portraits/women/3.jpg',
//         id: 4
//     },
//     {
//         name: 'سهیل رضایی',
//         age: 65,
//         phone: 148856,
//         avatar: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
//         avatarLarge: 'https://randomuser.me/api/portraits/men/65.jpg',
//         id: 5
//     },
//     {
//         name: 'Iiris Kotila',
//         age: 26,
//         phone: 136957,
//         avatar: 'https://randomuser.me/api/portraits/thumb/women/14.jpg',
//         avatarLarge: 'https://randomuser.me/api/portraits/women/14.jpg',
//         id: 6
//     },
//     {
//         name: 'Lucie Leroy',
//         age: 43,
//         phone: 96584236,
//         avatar: 'https://randomuser.me/api/portraits/thumb/women/69.jpg',
//         avatarLarge: 'https://randomuser.me/api/portraits/women/69.jpg',
//         id: 7
//     },
//     {
//         name: 'طاها حیدری',
//         age: 21,
//         phone: 36584,
//         avatar: 'https://randomuser.me/api/portraits/thumb/men/37.jpg',
//         avatarLarge: 'https://randomuser.me/api/portraits/men/37.jpg',
//         id: 8
//     },
//     {
//         name: 'Margot Faure',
//         age: 65,
//         phone: 963258,
//         avatar: 'https://randomuser.me/api/portraits/thumb/women/87.jpg',
//         avatarLarge: 'https://randomuser.me/api/portraits/women/87.jpg',
//         id: 9
//     },
//     {
//         name: 'اميرعلي سهيلي راد',
//         age: 25,
//         phone: 45696,
//         avatar: 'https://randomuser.me/api/portraits/thumb/men/93.jpg',
//         avatarLarge: 'https://randomuser.me/api/portraits/men/93.jpg',
//         id: 10
//     },
//     {
//         name: 'Oskari Latt',
//         age: 36,
//         phone: 896325,
//         avatar: 'https://randomuser.me/api/portraits/thumb/men/96.jpg',
//         avatarLarge: 'https://randomuser.me/api/portraits/men/96.jpg',
//         id: 11
//     },
//     {
//         name: 'Ritthy Cooper',
//         age: 45,
//         phone: 852364,
//         avatar: 'https://randomuser.me/api/portraits/thumb/men/55.jpg',
//         avatarLarge: 'https://randomuser.me/api/portraits/men/55.jpg',
//         id: 12
//     },
//     {
//         name: 'Claudine Da rosa',
//         age: 85,
//         phone: 145698,
//         avatar: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
//         avatarLarge: 'https://randomuser.me/api/portraits/women/45.jpg',
//         id: 13
//     },
//     {
//         name: 'Iida Savela',
//         age: 58,
//         phone: 123548,
//         avatar: 'https://randomuser.me/api/portraits/thumb/women/92.jpg',
//         avatarLarge: 'https://randomuser.me/api/portraits/women/92.jpg',
//         id: 14
//     },
//     {
//         name: 'Margarita Castro',
//         age: 84,
//         phone: 87956,
//         avatar: 'https://randomuser.me/api/portraits/thumb/women/68.jpg',
//         avatarLarge: 'https://randomuser.me/api/portraits/women/68.jpg',
//         id: 15
//     },
//     {
//         name: 'Leo Thomas',
//         age: 41,
//         phone: 879546,
//         avatar: 'https://randomuser.me/api/portraits/thumb/men/78.jpg',
//         avatarLarge: 'https://randomuser.me/api/portraits/men/78.jpg',
//         id: 16
//     }
// ];

// const initialState = null

// fetch('https://randomuser.me/api/?results=100')
//     .then((response) => {
//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//         return response;
//     })
//     .then((response) => response.json())
//     .then(obj => obj.results)
//     .then(data => data.map(
//         (person, id) => ({
//             name: person.name.first.charAt(0).toUpperCase() + person.name.first.slice(1) + ' ' + person.name.last.charAt(0).toUpperCase() + person.name.last.slice(1),
//             age: person.dob.age,
//             phone: person.phone,
//             avatar: person.picture.thumbnail,
//             avatarLarge: person.picture.large,
//             id: id
//         })))
//     .then(data => {
//         // console.log(data)
//         initialState.push(data)
//
//     });



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
            return state = action.users;

        default:
            return state;
    }
}

export default combineReducers({
    users,
    usersHasErrored,
    usersIsLoading
});