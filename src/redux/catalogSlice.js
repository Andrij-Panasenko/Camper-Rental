import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers } from "./operations";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    favoriteList: [],
  },
  reducers: {
    addToFavorite(state, action) {
      const newItem = { ...action.payload, isFavorite: true };
      state.favoriteList = [...state.favoriteList, newItem];
    },
    removeFromFavorite(state, action) {
      state.favoriteList = state.favoriteList.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAllCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
export const { addToFavorite, removeFromFavorite } = catalogSlice.actions;
