import { useContext } from "react";
import { UserContext } from "./components/UserContext.js";
function UserDetails() {
  let userData = useContext(UserContext);
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
