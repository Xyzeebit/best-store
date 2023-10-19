import { createSlice } from "@reduxjs/toolkit";
import icon from "../assets/smartphone.png";


 const list = [
   {
     id: "jainba6b9jxhbya",
     title: "Samsung ultra s20 6gb ram 124gb rom",
     image: icon,
   },
   {
     id: "jainb6b9njxhbya",
     title: "Samsung ultra s20 6gb ram 124gb rom",
     image: icon,
   },
   {
     id: "jainb6b9jxhbMya",
     title: "Samsung ultra s20 6gb ram 124gb rom",
     image: icon,
   },
   {
     id: "jainb6b9jxhboya",
     title: "Samsung ultra s20 6gb ram 124gb rom",
     image: icon,
   },
   {
     id: "jainb6b9jxhbYoya",
     title: "Samsung ultra s20 6gb ram 124gb rom",
     image: icon,
   },
   {
     id: "jainVb6b9jxhboya",
     title: "Samsung ultra s20 6gb ram 124gb rom",
     image: icon,
   },
 ];
   

const initialState = {
  loading: true,
  error: null,
  data: null,
  searching: false,
  list: null,
  cart: [],
  cartItemCounter: 0,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      const text = action.payload.text;
      if (text) {
        state.list = list;
        state.searching = true;
      } else {
        state.searching = false;
      }
            
    },
      
    addToCart: (state, action) => {
      const item = action.payload.item;
      state.cart.push(item);
      state.cartItemCounter++;
      return state;
    },

    removeFromCart: (state, action) => {
      const id = action.payload.id;
      const index = state.cart.findIndex(item => item.id === id);
      if (index !== -1) {
        state.cart.splice(index, 1);
        state.cartItemCounter--;
      }
      return state;
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
      return state;
    }
  }
});

export const { searchProduct, addToCart, removeFromCart, fetchCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;