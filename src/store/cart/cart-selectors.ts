import {RootState} from "../store";
import {createSelector} from "@reduxjs/toolkit";

export const selectCartState = (state: RootState) => state.cart;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartIsEmpty = createSelector(
  [selectCartItems],
  (cartItems) =>  cartItems.length === 0
)

export const selectCartTotalQuantity = (state: RootState) => state.cart.totalQuantity;

export const selectCartTotalAmount = (state: RootState) => state.cart.totalAmount;
