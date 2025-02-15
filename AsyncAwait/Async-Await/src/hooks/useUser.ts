import { useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "axios";

const useUser=()=>{

    const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const[isLoading, setLoading]=useState(false);
  const {request, cancel}= userService.getAllUsers();
  request.then((res) => {
    setUsers(res.data);
    setLoading(false);
})
  .catch((err) => {
    if (err instanceof CanceledError) return;
    setError(err.message);
    setLoading(false);
  });
return () => cancel();
}, []);
return {users, error, isLoading, setUsers, setError}
}


export default useUser;