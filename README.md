# ReactNative-with-Redux
Boilerplate code for using legacy redux with react/reactnative.

## Setup

clone the repository
```sh
git clone https://github.com/SayanSahu99/ReactNative-with-Redux.git
```
Replace IP address with your local IPV4 address in ReactNative-with-Redux/redux/actionCreators.js

```js
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
```
```sh
cd ReactNative-with-Redux
yarn add redux react-redux redux-thunk redux-logger 
expo start
```

## Server Setup
```sh
cd ReactNative-with-Redux/server
yarn install
yarn start
```
