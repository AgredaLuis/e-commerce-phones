import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import modalReducer from "../features/modalSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    modal: modalReducer,
  },
});
