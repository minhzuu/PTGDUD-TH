import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);

      if (item) {
        item.quantity = Math.max(1, quantity);
      }
    },
  },
});

// Selectors
export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartTotalQuantity = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotalPrice = (state) =>
  state.cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
