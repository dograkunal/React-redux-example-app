import { createSlice } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
  name: "tableState",
  initialState: {
    countersList: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.countersList.push(action.payload);
    },
    removeItem: (state, action) => {
      state.countersList.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = tableSlice.actions;

export default tableSlice.reducer;
