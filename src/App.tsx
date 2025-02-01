// import { useState } from "react";
// import axios from "axios";
// import ProductList from "../expense-tracker/components/ProductList";
// import { useState } from "react";
// import ExpandableText from "./components/ExpandableText";
// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";
// import produce from "immer";
// import Message from "./components/Message";
// import ExerciseButton from "./components/ExerciseButton";
// import {BsFillCalendarFill} from 'react-icons/bs';
// import Button from './components/Button/Button';
// import ListGroup from './components/ListGroup'

// import { useEffect, useState } from "react";

// import ExpenseForm from "../expense-tracker/components/ExpenseForm";
// import ExpenseFilter from "../expense-tracker/components/ExpenseFilter";
// import ExpenseList from "../expense-tracker/components/ExpenseList";
// import { useState } from "react";
// import Form1 from "../expense-tracker/components/Form1";

// import Form2 from "../expense-tracker/components/Form2";

// import Form from "./components/Form";

// import Like from "./components/Like";

// import ExerciseShowingAlert from "./components/ExerciseShowingAlert";
// import categories from "../expense-tracker/categories";
// const connect=()=>console.log('Connecting');
// const disconnect=()=>console.log('Disconnecting');



// function App() {

  // useEffect(()=>{
    // connect();
    // return ()=>disconnect();
  // })


  // const [selectedCategory, setSelectedCategory] = useState("");
  // const [expenses, setExpenses] = useState([
  //   { id: 1, description: "aaa", amount: 10, category: "Utilities" },
  //   { id: 2, description: "bbb", amount: 10, category: "Utilities" },
  //   { id: 3, description: "ccc", amount: 10, category: "Utilities" },
  //   { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  // ]);
  // const visibleExpenses = selectedCategory
  //   ? expenses.filter((e) => e.category === selectedCategory)
  //   : expenses;
  // const [drink, setDrink] = useState({
  //   title: "Americano",
  //   price: 5,
  // });
  // const handleClick = () => {
  //   setDrink({ ...drink, price: 6 }); //
  // };

  // const[cartItems, setCartItems]=useState(['Product1','Product2']);
  // const[customer, setCustomer]=useState({
  //   name:'John',
  //   address:{
  //     city:'San Francisco',
  //     zipCode:94111
  //   }
  // });
  // const handleClick=()=>{
  //   setCustomer({...customer, address:{...customer.address,zipCode:94112},
  //   })
  // }

  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "Bug 1", fixed: false },
  //   { id: 2, title: "Bug 2", fixed: false },
  // ]);
  // const handleClick = () => {
  // setBugs(bugs.map(bug=> bug.id ===1 ?{...bug, fixed:true} :bug))
  //  OR
  //   setBugs(
  //     produce((draft) => {
  //       //immer method
  //       const bug = draft.find((bug) => bug.id === 1);
  //       if (bug) bug.fixed = true;
  //     })
  //   );
  // };
  // {

  //1. Exercise updating State
  // const[game, setGame]=useState({
  //   id:1,
  //   player:{
  //     name:"John",
  //   },
  // });
  // const handleClick=()=>{
  //   setGame({...game,player:{...game.player,name:"Bob"}})
  // }

  //2. Exercise updating State
  // const[pizza, setPizza]=({
  //   name:"Spicy Pepperoni",
  //   toppings:['Mushroom']
  // });
  // const handleClick=()=>{
  //   setPizza({...pizza,toppings:[...pizza.toppings,'Cheese']})
  //   pizza.toppings.push('Cheese');
  // }

  //3. Exercise updating State
  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "Product 1", quantity: 1 },
  //     { id: 2, title: "Product 2", quantity: 1 },
  //   ],
  // });
  // const handleClick = () => {
  //   setCart({ ...cart, items:cart.items.map(item=>item.id === 1 ? {...item, quantity:item.quantity + 1} : item) });
  // };

  // const[isVisible,setVisibility]=useState(false);
  // let count=0;
  // const handleClick=()=>{
  //   setVisibility(true);
  //   count++;
  //   console.log(isVisible);
  // };
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem=(item:string)=>{
  //   console.log(item);
  // }
  // const items=["New York", "Los Angeles", "San Francisco"]
  // const[alertVisible,setAlertVisibility]=useState(false);

  // const [users, setUsers] = useState("");
  // const [error, setError] = useState("");
  // const addUser = () => {
  //   const originalUsers = [...users];
  //   const newUser = { id: 0, name: "Mosh" };
  //   setUsers([newUser, ...users]);
  //   axios
  //     .post("https://jsonplaceholder.typicode.com/users", newUser)
  //     .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
  //     .catch((err) => {
  //       setError(err.message);
  //       setUsers(originalUsers);
  //     });
  // };

  // const updateUser = (user: User) => {
  //   const originalUsers = [...users];
  //   const updatedUser = { ...user, name: user.name + "!" };
  //   setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
  //   axios
  //     .patch(
  //       "https://jsonplaceholder.typicode.com/users/" + user.id,
  //       updatedUser
  //     )
  //     .catch((err) => {
  //       setError(err.message);
  //       setUsers(originalUsers);
  //     });
  // };
//  const[category,setCategory]= useState('');
//   return (
//     <>
//     <select className="form-select" onChange={(event)=>setCategory(event.target.value)}>
//     <option value=""></option>
//     <option value="Clothing">Clothing</option>
//     <option value="Household">Household</option>
//     </select>
//     <ProductList category={category}/>
      {/* <Form1/> */}
      {/* <div className="mb-5"> */}
      {/* <ExpenseForm onSubmit={data=>console.log(data)}/> */}
      {/* <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      /> */}
      {/* <Form2/> */}
      {/* <ExpandableText maxChars={10}> */}
      {/* <ExpandableText> */}
      {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tempore laboriosam at rerum sint pariatur delectus nisi quasi itaque eveniet explicabo dignissimos porro iusto aspernatur, ipsum sapiente error perspiciatis soluta ipsam qui nesciunt fuga distinctio ut debitis. Obcaecati, sapiente. Numquam fugit distinctio veniam quod quas eius? Ullam obcaecati quisquam aliquam dolorum? Iure adipisci enim quisquam quas quasi, obcaecati doloribus harum necessitatibus rerum consectetur et! Ratione sit at dolore tempora et doloribus sed veritatis omnis tenetur nesciunt. Provident molestiae iure quisquam non dolore officiis eos blanditiis labore a ducimus odio quidem ab culpa, nulla esse vitae impedit minima quasi error aspernatur? </ExpandableText> */}
      {/* {drink.price} */}
      {/* <button onClick={handleClick}>Click Me </button> */}
      {/* <NavBar cartItemsCount={cartItems.length}/> */}
      {/* <Cart cartItems={cartItems} onClear={()=>setCartItems([])} /> */}
      {/* <Message />   */}
      {/* <Message />   */}
      {/* <Message />   */}

      {/* {bugs.map(bug=> <p key={bug.id}>{bug.title}{bug.fixed ? 'Fixed' :'New'}</p>)} */}
      {/* <button onClick={handleClick}>Ckick Me</button>  */}
      {/* <Like onClick={()=>console.log('Clicked') }/> */}
      {/* <Button > My Button</Button> */}
      {/* <ListGroup heading="Miami" items={items} onSelectItem={()=>{}}/> */}
      {/* <BsFillCalendarFill color='red' size="40"/> */}
      {/* {alertVisible && <ExerciseShowingAlert onClose={()=>setAlertVisibility(false)}>My Alert</ExerciseShowingAlert>} */}
      {/* <ExerciseButton  color="primary" onClick={() => setAlertVisibility(true)}> */}
      {/* My Button */}
      {/* </ExerciseButton> */}
      {/* <Alert>
    // Hello <span>World</span>
    // </Alert> */}
      {/* <PassingFunctionsProps items={items} heading='Cities' onSelectItem={handleSelectItem}/> */}

      {/* Create data */}

      {/* {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul> */}
    // </>
  // );
// }

// Handling Errors
import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
 const[error, setError]= useState("");

  useEffect(()=>{
    axios
    .get<User[]>("https://jsonplaceholder.typicode.com/xusers") 
     .then((res) =>  setUsers(res.data))
     .catch(err=>setError(err.message));
     
    },[]);
  return (
    <>
    {error &&<p className="danger">{error}</p>}
  <ul>
    {users.map((user)=>(
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
  </>
  );
};

export default App;


