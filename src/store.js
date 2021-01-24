

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import slotReducer from './views/slot-reducer'

const rootReducer = combineReducers({
slotReducer
});

const store = createStore(rootReducer, applyMiddleware(promise, thunk, logger));

export default store;
