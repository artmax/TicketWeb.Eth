import { createStore } from 'redux';
import AppReducer from './reducers/AppReducer';
import initialState from './initialState';

const store = createStore(AppReducer, initialState);

export default store;