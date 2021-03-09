import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = applyMiddleware(promise, thunk, logger)(createStore)(rootReducer);
// 挂载到window上,方便查看,可以不写
(<any>window).store = store;
export default store;
