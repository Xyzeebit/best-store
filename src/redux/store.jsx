import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import topCategoriesReducer from "./topcatSlice";

const rootReducer = combineReducers({
    topCategories: topCategoriesReducer,
    categories: categoriesSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});