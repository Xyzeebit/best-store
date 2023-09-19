import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    name: '',
    orders: [],
    avatar: '',
    id: ''
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, { user }) => {
            state = user;
        }
    }
});

export const { updateUser } = userReducer.actions;
export default userReducer.reducer;