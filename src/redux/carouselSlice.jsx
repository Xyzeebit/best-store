import { createSlice } from "@reduxjs/toolkit";
import { ITEMS } from "../api/apis";

const initialState = {
  bannersLoading: true,
  banners: ITEMS,
  deals: null,
}

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    updateBannersCarousel: (state, { items }) => {
      if (items.ok) {
        state.banners = items.banners;
        state.bannersLoading = false;
      } else {
        state.bannersLoading = false;
      }
    },
    updateDealsCarousel: (state, { items }) => {
      if (items.ok) {
        state.deals = items.deals;
      }
    },
  },
});

export const {
  updateBannersCarousel,
  updateDealsCarousel
} = carouselSlice.actions;

export default carouselSlice.reducer;