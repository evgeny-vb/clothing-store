import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartItem, CartState} from "./cart-types";
import {Product} from "../categories/categories-types";

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  isOpen: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product | CartItem>) {
      state.totalQuantity += 1;
      state.totalAmount += action.payload.price;

      const existingCartItem = state.items.find(item => item.id === action.payload.id);

      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        const newItem: CartItem = {
          id: action.payload.id,
          imageUrl: action.payload.imageUrl,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1
        };
        state.items = [...state.items, newItem];
      }
    },
    removeItem(state, action: PayloadAction<CartItem>) {
      state.totalQuantity -= 1;
      state.totalAmount -= action.payload.price;

      const cartItem = state.items.find(item => item.id === action.payload.id);

      if (!cartItem) return

      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        state.items = state.items.filter(item => item.id !== cartItem.id)
      }
    },
    open(state) {
      state.isOpen = true;
    },
    close(state) {
      state.isOpen = false;
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice;