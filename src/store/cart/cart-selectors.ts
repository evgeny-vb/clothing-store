import {RootState} from "../store";

export const selectCartState = (state: RootState) => state.cart;

export const selectCartTotalQuantity = (state: RootState) => state.cart.totalQuantity;
