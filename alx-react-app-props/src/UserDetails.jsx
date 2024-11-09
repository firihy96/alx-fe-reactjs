/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "./UserContext";
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
