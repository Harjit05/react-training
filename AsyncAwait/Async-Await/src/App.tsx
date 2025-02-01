// import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";
import {CanceledError} from "./services/api-client";
import axios from "axios";
import userService, { User } from "./services/user-service";
import useUser from "./hooks/useUser";

// interface User{
//   id:number;
//   name:string;
// }

const App = () => {
 const{users, error, isLoading, setUsers, setError}= useUser();
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const[isLoading, setLoading]=useState(false);

  useEffect(() => {
    //Async and await
    // const fetchUsers= async()=>{
    //   try{
    //     const res= await axios
    //     .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
    //     setUsers(res.data);
    //   }
    //   catch(err){
    //     setError((err as AxiosError).message);
    //   }
    // }
    // fetchUsers();

    //to cancel fetch request if no longer needed
    // const controller = new AbortController();
    setLoading(true);
    // axios
    // .get("https://jsonplaceholder.typicode.com/users", {
     const {request, cancel}= userService.getAllUsers();
      request.then((res) => {
        setUsers(res.data);
        setLoading(false);
  })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      })
      // .finally(()=>{
      //   setLoading(false);
      // })
    return () => cancel();
  }, []);

  const deleteUser=(user:User)=>{
    const originalUsers=[...users];
    setUsers(users.filter((u)=>u.id !==user.id));

    // apiClient.delete("/users/" + user.id)
      userService.deleteUser(user.id).catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
   const addUser=()=>{
    const originalUsers=[...users];
    const newUser={id:0, name:"Mosh"};
    setUsers([newUser, ...users]);
   }

  // apiClient.post("/users" , newUser)
      userService.createUser(newUser).then(({data:savedUser}) =>setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser=(user: User)=>{
    const originalUsers=[...users];
    const updatedUser={...user, name:user.name + "!"};
    setUsers(users.map((u)=>(u.id === user.id ? updatedUser :)))
  }
  // apiClient.patch("/users/" +user.id,updatedUser)
  userService.updateUser(updatedUser).catch((err) => {
    setError(err.message);
    setUsers(originalUsers);
  });
};


  return(
    <>
    {error && <p className="text-danger">{error}</p>}
    {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
            </ul>
     
    </>
  )

};

export default App;
