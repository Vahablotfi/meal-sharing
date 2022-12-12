import React from "react";
import "./navbar.css";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"}>
          <span className="logo">
            <img src={logo} alt="logo" />
          </span>
        </Link>
        <ul className="navItems">
          <Link className="text-link" to={"/menu"}>
            <li>Meals</li>
          </Link>
          <Link className="text-link" to={"/menu"}>
            <li>Book Meal</li>
          </Link>
          <Link className="text-link" to={"/"}>
            <li>Add Meal</li>
          </Link>
          <li>About</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

