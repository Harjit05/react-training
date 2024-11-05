import { useState } from "react";

function RenderingLists() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //Hook
  const [selectedIndex, setSelectedIndex]=useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No Item Found</p> : null}
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default RenderingLists;
