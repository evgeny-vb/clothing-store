import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    isVisible: false
  },
  reducers: {
    addItem(state, action) {

    },
    toggle(state) {
      state.isVisible = !state.isVisible
    }
  }
})

export const cartActions = cartSlice.actions;

export default cartSlice