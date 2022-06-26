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
      if (item) {
        item.qty++;
      } else {
        state.cart.push(action.payload);
      }
    },
    incrementQty: (state, action)=> {
      const item = state.cart.find((c) => c.id === action.payload);
      if (item) {
        item.qty++;
      }
    },
    decrementQty: (state, action)=> {
      const item = state.cart.find((c) => c.id === action.payload);
      
      if (item) {
        if (item.qty <= 1) {
          const updatedItem = state.cart.filter(
            (c) => c.id !== action.payload
          );
          state.cart = updatedItem;
        } else {
          item.qty = parseInt(item.qty) - 1;
         
        }
      }
    },
    }
  },
);
export const { addItem, incrementQty,decrementQty } = cartSlice.actions;

export default cartSlice.reducer;
