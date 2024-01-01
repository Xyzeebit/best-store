import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    firstname: "Donald",
    lastname: "Sunday",
    orders: [],
    address: null,
    avatar: '',
    id: 'mskj908yUjmsmnGbn',
    email: 'gotodonald@gmail.com',
    is_merchant: true,
    merchant: {
        store: "",
        productIds: [],
    }
}

// https://prhddrarcwikrdknpljf.supabase.co/auth/v1/callback

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state = { ...action.payload };
            return state;
        }
    }
});

export const { updateUser } = userReducer.actions;
export default userReducer.reducer;