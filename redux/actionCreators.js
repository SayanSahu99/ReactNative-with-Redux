import * as ActionTypes from './actionTypes';

export const fetchUsers = () => async (dispatch) => {

    dispatch(usersLoading());

    return await fetch("http://192.168.1.102:8000/data")
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(users => dispatch(addUsers(users)))
    .catch(error => dispatch(UsersFailed(error.message)));
};

export const usersLoading = () => ({
    type: ActionTypes.USER_LOADING
})

export const addUsers = (users) => ({
    type: ActionTypes.GET_USER,
    payload: users
})

export const UsersFailed = (errmess) => ({
    type: ActionTypes.USER_FAILED,
    payload: errmess
})