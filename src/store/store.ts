import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cart/cart-slice";
import categoriesSlice from "./categories/categories-slice";
import uiSlice from "./ui/ui-slice";
import storage from "redux-persist/lib/storage";
import {persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  categories: categoriesSlice.reducer,
  ui: uiSlice.reducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch