import React, { useState } from "react";

function Counter() {
  const [items, setItem] = useState([]);
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
    // check();
    if (count % 3 === 0) {
      setItem([...items, count]);
    }
    // console.log(items);
  };

  // const check = () => {
  //   if (count % 3 === 0) {
  //     setItem([...items, count]);
  //   }
  // };

  const handleDelete = (index) => {
    const stuff = [...items];
    stuff.splice(index, 1);
    // console.log(stuff);
    setItem(stuff);
  };

  return (
    <>
      count: {count}
      <div>
        <button onClick={increase}>Increase</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Action</th>
            </tr>
            {items &&
              items.map((e, index) => (
                <tr key={index}>
                  <td>{e}</td>
                  <button onClick={() => handleDelete(index)}>❌</button>
                </tr>
              ))}
          </thead>
        </table>
      </div>
    </>
  );
}

export default Counter;
