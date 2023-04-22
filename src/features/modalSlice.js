import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  id: 1,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,

  reducers: {
    openModal: (state, action) => {
      state.id = action.payload;
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
