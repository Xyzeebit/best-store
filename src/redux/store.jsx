import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import topCatSlice from "./topcatSlice";

const rootReducer = combineReducers({
    topCategories: topCatSlice,
    categories: categoriesSlice,
});

export const store = configureStore({
    reducer: rootReducer
});