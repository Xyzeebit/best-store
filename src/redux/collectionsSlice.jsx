import { createSlice } from "@reduxjs/toolkit";

 const order = {
   orders: [
    //  {
    //    id: "8Nsjjkla",
    //    title: "iWatch",
    //    price: "145.45",
    //    quantity: 2,
    //  },
   ],
   deliveryDetails: {
    //  firstname: "Donald",
    //  lastname: "Sunday",
    //  email: "gotodonald@gmail.com",
    //  phone: "+2349031372176",
    //  address: "123 fake street",
    //  city: "Uyo",
    //  zipCode: "50021"
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
      const text = action.payload.text;
      console.log(text)
      if (text) {
        const list = state.data.filter(item => {
          if (item.title.toLowerCase() === text.toLowerCase() ||
            item.title.toLowerCase().includes(text.toLowerCase())
          ) {
            return true;
          } else {
            return false;
          }
        })
        state.list = list;
        state.searching = true;
      } else {
        state.searching = false;
      }
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
      
      if (payload.ok) {
        state.loading = false;
        state.error = null;
        state.data = payload.data;
      } else {
        state.loading = false;
        state.error = payload.error;
        state.data = null;
      }
      return state;
    }
  }
});

export const {
  searchProduct,
  addToCart,
  removeFromCart,
  updateCartItem,
  fetchCollections,
  clearOrders,
  createOrders,
} = collectionsSlice.actions;

export default collectionsSlice.reducer;