import React from "react";
import logo from "../../assets/logo.png";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      {/* <header className="navbar"> */}
        <div className="container navContainer">
          <NavLink to={"/"}>
            <img className="logo" src={logo} alt="logo" />
          </NavLink>

          <ul className="navList">
            <li>
              <NavLink to={"/shop"} className="navItem">
                Shop
              </NavLink>
            </li>
            <li>
              <a className="navItem">About</a>
            </li>
            <li>
              <a className="navItem">Contact</a>
            </li>
          </ul>
        </div>
      {/* </header> */}
    </>
  );
}

export default Header;
