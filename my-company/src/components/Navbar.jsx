import classes from "../styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul className={classes.menuItems}>
        <li>
          
          <NavLink to="/home" >Home</NavLink>
        </li>
        <li>
          
          <NavLink to="/about" >About</NavLink>
        </li>
        <li>
          
          <NavLink to="/services" >Services</NavLink>
        </li>
        <li>
          
          <NavLink to="/contact" >Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
