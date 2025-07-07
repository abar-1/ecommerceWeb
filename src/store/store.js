"use client";
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
//import { loggerMiddleware } from './middleWares/logger';
import { thunk } from 'redux-thunk';

import { rootReducer } from './rootReducer';

//root-reducer, combination of all reducers


const persistConfig = {
    key: 'root',
    storage, 
    whitelist: ['cart', 'categories'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

//only logs if in dev mode
const middleWares = [process.env.NODE_ENV === 'production' && logger, thunk].filter(
    Boolean
);

const thunkMiddleware = (store) => (next) => (action) => {
    if(typeof(action) === 'function') {
        action(dispatch);
    }
}

const composeEnhancer = (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);