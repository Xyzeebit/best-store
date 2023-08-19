import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: true,
    error: null,
    data: {
        electronics: []
    },
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        searchProduct: (state, {payload}) => {

        }
    }
});

export const { searchProduct } = categoriesSlice.actions;

export default categoriesSlice;