import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.cart.find((c) => c.id === action.payload.id);
      console.log(item);
      if (item) {
        item.qty++;
      } else {
        state.cart.push(action.payload);
      }
    },
  },
});
export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
