// import axios, { AxiosError, CanceledError } from "axios";
import axios, {  CanceledError } from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

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
    const controller = new AbortController();
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

};

export default App;
