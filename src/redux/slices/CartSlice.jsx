import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qty += action.payload.qty; // If item exists, increase quantity
      } else {
        state.cart.push(action.payload); // Add new item if it doesn't exist
      }
    },
    removeFromCart: (state, action) => {
      // Use action.payload directly as the id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.qty += 1; // Increase item quantity by 1
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1; // Decrease item quantity by 1, but not less than 1
      } else if (item && item.qty === 1) {
        state.cart = state.cart.filter((cartItem) => cartItem.id !== item.id); // Remove item if quantity reaches 0
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

