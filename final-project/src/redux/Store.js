import {createStore,combineReducers} from 'redux';

import UserReducer from './reducers/user.reducer';
import{applyMiddleware} from 'redux'
import {getUsersFromServer} from './middlewares/crud'


const reducer=combineReducers({UserReducer})
const store=createStore(reducer,applyMiddleware(getUsersFromServer));
store.dispatch({type:'SET_USERS_FROM_SERVER'})

window.store=store;
export default store;