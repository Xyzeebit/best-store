import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";

const rootReducer = combineReducers({
    categories: categoriesSlice,
});

export const store = configureStore({
    reducer: rootReducer
});