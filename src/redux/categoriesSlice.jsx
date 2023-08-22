import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    error: null,
    data: null,
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        searchProduct: () => {
            
        },
        fetchCategories: (state, { payload }) => {
            if (payload.ok) {
                state.loading = false;
                state.error = null;
                state.data = payload.data;
            } else {
                state.loading = false;
                state.error = payload.error;
                state.data = null;
            }
        }
    }
});

export const { searchProduct } = categoriesSlice.actions;

export default categoriesSlice.reducer;