import { useState } from "react";
// import "./ListGroup.css";
// import './App.css'
import styles from './ListGroup.module.css';
import styled from 'styled-components';

const List=styled.ul `
    list-style: none;
    padding: 0;
`;

interface ListItemProps{
  active:boolean;
}
const ListItem=styled.li<ListItemProps> `
    padding: 5px 0;
    background:${props=>props.active ? 'blue' : 'none'}
`


interface Props{
  items: string[];
  heading: string;
  onSelectItem:(item:string)=>void;
}
function ListGroup({items,heading, onSelectItem}: Props) {
  //Hook
  // const [selectedIndex, setSelectedIndex]=useState(-1);
  const [selectedIndex, setSelectedIndex]=useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No Item Found</p> : null}
      {items.length === 0 && <p>No Item Found</p>}
      {/* <ul className="list-group"> */}
      {/* <ul className={[styles.listGroup,styles.container].join(' ')}> */}
      <List>
        {items.map((item, index) => (
          <ListItem
          active= {index === selectedIndex}
          // {/* //   className={ */}
          // {/* //     selectedIndex === index */}
          // {/* //       ? "list-group-item active" */}
          // {/* //       : "list-group-item" */}
          //   }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
            </ListItem>
        ))
        }
        </List>
      {/* </ul> */}
    </>
  );
}
export default ListGroup;
