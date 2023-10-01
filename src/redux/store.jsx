import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import topCategoriesReducer from "./topcatSlice";
import userReducer from "./userSlice";
import carouselSlice from "./carouselSlice";

const rootReducer = combineReducers({
    topCategories: topCategoriesReducer,
    categories: categoriesSlice,
    user: userReducer,
    carousel: carouselSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});