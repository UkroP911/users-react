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

export function usersFetchData(url) {
    return (dispatch) => {
        dispatch(usersIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(usersIsLoading(false));
                console.log(response)
                return response;
            })
            .then((response) => response.json())
            .then((data) => dispatch(usersFetchDataSuccess(data)))
            .catch((error) => {
                console.log("erro",error)
                dispatch(usersHasErrored(true))
            });
    };
}