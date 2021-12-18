import { createSlice } from "@reduxjs/toolkit";
import { addItem } from "./tableSlice";


export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },


  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;