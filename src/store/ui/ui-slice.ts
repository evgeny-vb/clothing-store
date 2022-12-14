import {uiState} from "./ui-types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: uiState = {
  isNavFixed: true
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setNavFixed(state, payload: PayloadAction<boolean>) {
      state.isNavFixed = payload.payload
    },
    resetNavShow(state) {
      state = initialState
    }
  }
})

export const uiActions = uiSlice.actions;

export default uiSlice;