import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import tableReducer from "./features/tableSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    tableState: tableReducer,
  },
});
