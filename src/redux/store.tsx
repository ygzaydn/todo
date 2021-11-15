import { createStore, applyMiddleware, combineReducers } from "redux";
import todoReducer from "./todo/todo-reducer";

import logger from "redux-logger";
import { persistStore } from "redux-persist";

const middleware = [];

if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}

const rootReducers: Reducer<State> = combineReducers({ todo: todoReducer });

export const store = createStore(rootReducers, applyMiddleware(...middleware));

export const persistor = persistStore(store);
