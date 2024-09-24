import { createSlice } from "@reduxjs/toolkit";

export const cartCounterSlice = createSlice({
  name: "cartCounter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
 
} );

export const { increment, decrement } = cartCounterSlice.actions;
export const cartCount = (state) => state.cartCounter.count;

export default cartCounterSlice.reducer;
