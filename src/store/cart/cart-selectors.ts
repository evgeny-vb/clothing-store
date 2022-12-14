import {RootState} from "../store";
import {createSelector} from "@reduxjs/toolkit";

export const selectCartState = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCartState],
  (cartState) => cartState.items
);
