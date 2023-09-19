import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import topCategoriesReducer from "./topcatSlice";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
    topCategories: topCategoriesReducer,
    categories: categoriesSlice,
    user: userReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});