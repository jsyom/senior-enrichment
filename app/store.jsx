 import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import promise from 'redux-promise';

export default createStore(rootReducer, applyMiddleware(promise, thunkMiddleware, createLogger()))
