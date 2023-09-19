import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: true,
    error: null,
    data: null,
}

/**
 * topCatSlice returns the top products of the categories list
 */
export const topCategoriesReducer = createSlice({
    name: "topCategories",
    initialState,
    reducers: {
        updateTopCategories: (state, {payload}) => {
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

export const { updateTopCategories } = topCategoriesReducer.actions;
export default topCategoriesReducer.reducer;