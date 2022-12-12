import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartItem, CartState} from "./cart-types";
import {Product} from "../categories/categories-types";

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  isOpen: false
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const newItem: CartItem = {
        id: Date.now(),
        imageUrl: action.payload.imageUrl,
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1
      }
      state.items = [...state.items, newItem]
    },
    toggle(state) {
      state.isOpen = !state.isOpen
    }
  }
})

export const cartActions = cartSlice.actions;

export default cartSlice;