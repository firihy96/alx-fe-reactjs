import { Link } from "react-router-dom";
import { login, logout } from "./useAuth";

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/profile">Go to Profile</Link>
    <button onClick={login}>Login</button>
    <button onClick={logout}>Logout</button>
  </div>
);

export default Home;
