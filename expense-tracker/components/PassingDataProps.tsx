import { useState } from "react";

interface Props{
  items: string[];
  heading: string;
}
function RenderingLists({items,heading}: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex]=useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No Item Found</p> : null}
      {items.length === 0 && <p>No Item Found</p>}
      {/* /* <ul className="list-group" style={{backgroundColor:"yellow"}}>  */ // inline styles} */}
      <ul className="list-none p-0">
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
