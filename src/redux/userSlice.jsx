import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: true,
    firstname: "Donald",
    lastname: "Sunday",
    orders: [],
    address: null,
    avatar: '',
    id: 'mskj908yUjmsmnGbn',
    email: 'gotodonald@gmail.com',
    isMerchant: true,
    merchant: {
        store: "",
        productIds: [],
    }
}

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