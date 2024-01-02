import { createSlice } from "@reduxjs/toolkit"

const initialState = { isLoggedIn: false };

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state = { ...state, ...action.payload };
            return state;
        }
    }
});

export const { updateUser } = userReducer.actions;
export default userReducer.reducer;