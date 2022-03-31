import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      if (isNaN(state.value)) {
        state.value = 0;
      }
      state.value += 1;
    },
    decrement: (state) => {
      if (isNaN(state.value)) {
        state.value = 0;
      }
      if (state.value > 0) {
        state.value -= 1;
      }
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
