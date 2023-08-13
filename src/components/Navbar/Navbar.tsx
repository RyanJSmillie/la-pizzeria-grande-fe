import React, { useEffect, useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import logo from "../../assets/logo.png";
import logoReverse from "../../assets/logo-reverse.png";

import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";
import BookTable from "../BookTable/BookTable";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const closeNav = () => {
    setClick(false);
  };

  const openNav = () => {
    setClick(true);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="nav-bar">
          <Link to="/">
            <div className="title">
              <img
                src={theme === "dark" ? logoReverse : logo}
                alt="logo"
                className="nav-image"
              />
              <h1>La Pizzeria Grande</h1>
            </div>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              {theme === "light" ? (
                <BsFillMoonStarsFill
                  onClick={() => {
                    toggleTheme();
                    closeNav();
                  }}
                  size={30}
                  style={{ color: "#f4632f" }}
                />
              ) : (
                <BsFillSunFill
                  onClick={() => {
                    toggleTheme();
                    closeNav();
                  }}
                  size={30}
                  style={{ color: "#0ea5d8" }}
                />
              )}
            </li>
            <li onClick={closeNav}>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li onClick={closeNav}>
              <NavLink to="/menu" className="nav-link">
                Menu
              </NavLink>
            </li>
            <li onClick={closeNav}>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>

            <li onClick={closeNav}>
              <BookTable />
            </li>
          </ul>

          <div className="hamburger">
            {click ? (
              <FaTimes
                onClick={closeNav}
                size={40}
                style={
                  theme === "light"
                    ? { color: "#f4632f" }
                    : { color: "#0ea5d8" }
                }
              />
            ) : (
              <FaBars
                onClick={openNav}
                size={40}
                style={
                  theme === "light"
                    ? { color: "#f4632f" }
                    : { color: "#0ea5d8" }
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
