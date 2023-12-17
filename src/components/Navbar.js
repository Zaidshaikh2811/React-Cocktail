import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <Link to="/">
            <img src={logo} alt="Cocktail" className="logo" />
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;
