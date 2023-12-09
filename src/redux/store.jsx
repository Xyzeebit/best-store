import { combineReducers, configureStore } from "@reduxjs/toolkit";
import collectionsSlice from "./collectionsSlice";
import userReducer from "./userSlice";
import carouselSlice from "./carouselSlice";

const rootReducer = combineReducers({
    collections: collectionsSlice,
    user: userReducer,
    carousel: carouselSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});