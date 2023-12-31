import { createSlice } from "@reduxjs/toolkit";

 const order = {
   orders: [
    
   ],
   deliveryDetails: {
    
   },
   shippingCost: 0.00,
 };
   

const initialState = {
  loading: true,
  error: null,
  data: null,
  searching: false,
  list: null,
  cart: [],
  cartItemCounter: 0,
  orders: order,
};

export const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      let text = action.payload.text;
      if (text) {
        state.searching = true;
      } else {
        state.searching = false;
      }
      return state;
    },
	
	updateSearchList: (state, action) => {
		state.list = action.payload;
		return state;
	},
      
    addToCart: (state, action) => {
      const item = action.payload;
      const index = state.cart.findIndex((it) => it?.id === item.id);
      if (index == -1) {
        state.cart.push(item);
        state.cartItemCounter++;
      }
      return state;
    },

    removeFromCart: (state, action) => {
      const id = action.payload.id;
      const index = state.cart.findIndex(item => item?.id === id);
      if (index !== -1) {
        state.cart.splice(index, 1);
        state.cartItemCounter--;
      }
      return state;
    },

    updateCartItem: (state, action) => {
      const index = state.cart.findIndex(it => it.id === action.payload.id);
      if (index != 1) {
        state.cart[index] = { ...state.cart[index], ...action.payload };
      }
      return state;
    },

    createOrders: (state, action) => {
      state.orders.deliveryDetails = action.payload.deliveryDetails;
      state.orders.orders = action.payload.orders;

      return state;
    },
    clearOrders: (state) => {
      state.order.deliveryDetails = [];
      return state;
    },

    fetchCollections: (state, { payload }) => {
      
      if (payload) {
        state.loading = false;
        state.error = null;
        state.data = payload;
      } else {
        state.loading = false;
        state.error = "Fetch error";
        state.data = null;
      }
      return state;
    }
  }
});

export const {
  searchProduct,
  updateSearchList,
  addToCart,
  removeFromCart,
  updateCartItem,
  fetchCollections,
  clearOrders,
  createOrders,
} = collectionsSlice.actions;

export default collectionsSlice.reducer;