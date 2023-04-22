import { createSlice } from "@reduxjs/toolkit";
import { storeProducts } from "../data";

const initialState = storeProducts;


export const productSlice = createSlice({
  name: "product",
  initialState: initialState,

  reducers: {


    clearCart: (state,action) =>{
      state.map((product) => {
        product.count = 0,
        product.total= 0,
        product.inCart = false
      })
    },

    decrementProduct: (state, action) => {
      const id = action.payload;
      const productFound = state.find((product) => product.id === id);
      if (productFound) {
        if (productFound.count === 1) {
          console.log("Error en disminuir el producto, si quieres sacarlo del carrito use el boton de remove");
        } else {
          productFound.count -= 1;
          productFound.total -= productFound.price;
        }
      }
    },
    incrementProduct: (state, action) => {
      const id = action.payload;
      const productFound = state.find((product) => product.id === id);
      if (productFound) {
        productFound.count += 1;
        productFound.total += productFound.price;
      }
    },

    removeProduct: (state, action) => {
      const productFound = state.find(
        (product) => product.id === action.payload
      );
      if (productFound) {
        productFound.count = 0;
        productFound.total -= productFound.price;
        productFound.inCart = false;
      }
    },

    editProduct: (state, action) => {
      const id = action.payload;

      const productFound = state.find((product) => product.id === id);
      if (productFound) {
        productFound.inCart = true;
        productFound.count = 1;
        productFound.total = productFound.price;
      }
    },
  },
});

export const {
  editProduct,
  decrementProduct,
  incrementProduct,
  removeProduct,
  clearCart,
} = productSlice.actions;
export default productSlice.reducer;
