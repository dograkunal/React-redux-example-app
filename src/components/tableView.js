import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../features/tableSlice";
function TableView() {
  const tableState = useSelector((state) => state.tableState.countersList);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Table View component</h1>
      <div className="row">
        {tableState &&
          tableState.map((el, index) => (
            <div key={index}>
              <p>{el}</p>
              <button
                onClick={() => {
                  dispatch(removeItem(index));
                }}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TableView;
