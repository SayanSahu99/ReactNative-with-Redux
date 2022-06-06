import logger from 'redux-logger';
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import {users} from './users';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            users: users
        }),
        applyMiddleware(thunk, logger)
    );

    return {store};
}
