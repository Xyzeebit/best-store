import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    name: '',
    orders: [],
    avatar: '',
    id: '',
    email: '',
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, payload) => {
            state = { ...payload.payload };
            return state;
        }
    }
});

export const { updateUser } = userReducer.actions;
export default userReducer.reducer;