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
