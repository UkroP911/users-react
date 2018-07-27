import * as C from '../constants';

export function usersHasErrored(bool) {
    return {
        type: C.USERS_HAS_ERRORED,
        hasErrored: bool
    };
}

export function usersIsLoading(bool) {
    return {
        type: C.USERS_IS_LOADING,
        isLoading: bool
    };
}

export function usersFetchDataSuccess(users) {
    return {
        type: C.USERS_FETCH_DATA_SUCCESS,
        users
    };
}
export function searchData(result) {
    return {
        type: C.SEARCH_DATA,
        result
    }
}

export function usersFetchData(url) {
    return (dispatch) => {
        dispatch(usersIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(usersIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then(obj => obj.results)
            .then(data => data.map(
                (person, id) => ({
                    name: person.name.first.charAt(0).toUpperCase() + person.name.first.slice(1) + ' ' + person.name.last.charAt(0).toUpperCase() + person.name.last.slice(1),
                    age: person.dob.age,
                    phone: person.phone,
                    avatar: person.picture.thumbnail,
                    avatarLarge: person.picture.large,
                    id: id
                })))
            .then((data) => dispatch(usersFetchDataSuccess(data)))
            .catch(() => dispatch(usersHasErrored(true)));
    };
}