import {combineReducers, configureStore} from "@reduxjs/toolkit";
import taskReducer from './slices/taskSlice.js'

const localStorageMiddleware = ({ getState }) => {
    return next => action => {
        const result = next(action);
        localStorage.setItem('appState', JSON.stringify(getState()));
        return result;
    };
};
const reHydrateStore = () => {
    if (localStorage.getItem('appState') !== null) {
        return JSON.parse(localStorage.getItem('appState'));
    }
};

const reducers = combineReducers({
    tasks: taskReducer
})

const store = configureStore({
    reducer: reducers,
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(localStorageMiddleware)
})

export default store