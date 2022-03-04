import { createStore, applyMiddleware, Store } from "redux";
import todoReducer from "./todo/todo-reducer";

import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store: Store<stateType, actionType> & {
    dispatch: dispatchType;
} = createStore(persistedReducer, applyMiddleware(logger));

export const persistor = persistStore(store);
