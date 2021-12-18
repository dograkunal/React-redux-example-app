import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counterSlice";
// import styles from "./Counter.module.css";
import { addItem, removeItem } from "../features/tableSlice";
export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // if (count > 0 && count % 3 == 0) {
  //   // dispatch(addItem(count));
  // }
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => {
            dispatch(increment());
            if (count > 0 && (count + 1) % 3 == 0) {
              dispatch(addItem(count + 1));
            }
          }}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
