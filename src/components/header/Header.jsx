import React from "react";
import logo from "../../assets/logo.png";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <ul className="navList">
            <NavLink to={"/"}>
              <img className="logo" src={logo} alt="" />
            </NavLink>
            <NavLink to={"/shop"}>
              <li className="shop">
                <p>Shop</p>
              </li>
            </NavLink>
            <li className="about">About</li>
            <li className="contacts">Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
