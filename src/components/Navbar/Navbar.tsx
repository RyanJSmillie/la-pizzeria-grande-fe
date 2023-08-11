import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="nav-bar">
          <Link to="/">
            <div className="title">
              <img src={logo} alt="logo" className="nav-image" />
              <h1>La Pizzeria Grande</h1>
            </div>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li onClick={handleClick}>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/menu" className="nav-link">
                Menu
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>

            <li onClick={handleClick}>
              <button>Book a Table</button>
            </li>
          </ul>

          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={40} style={{ color: "#f4632f" }} />
            ) : (
              <FaBars size={40} style={{ color: "#f4632f" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
