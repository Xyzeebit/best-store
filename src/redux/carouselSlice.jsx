import { createSlice } from "@reduxjs/toolkit";
import { BANNER_ITEMS, DEALS_ITEM } from "../api/apis";

const initialState = {
  bannersLoading: true,
  banners: BANNER_ITEMS,
  dealsLoading: true,
  deals: DEALS_ITEM,
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
      return state;
    },
    updateDealsCarousel: (state, { items }) => {
      if (items.ok) {
        state.deals = items.deals;
        state.dealsLoading = false;
      } else {
        state.dealsLoading = false;
      }
      return state;
    },
  },
});

export const {
  updateBannersCarousel,
  updateDealsCarousel
} = carouselSlice.actions;

export default carouselSlice.reducer;