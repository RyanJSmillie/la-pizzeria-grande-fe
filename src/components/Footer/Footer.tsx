import React from "react";

import "./Footer.scss";

import { NavLink } from "react-router-dom";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import BookTable from "../BookTable/BookTable";

const Footer = () => {
  return (
    <div className="section-footer">
      <div className="container">
        <div className="grid-container">
          <div className="footer-grid-item">
            <NavLink className="footer-link" to={"/"}>
              Home
            </NavLink>
            <NavLink className="footer-link" to={"/menu"}>
              Menu
            </NavLink>
            <NavLink className="footer-link" to={"/contact"}>
              Contact
            </NavLink>
            <a
              className="footer-link"
              href="https://www.instagram.com/ryanjsmillie/"
            >
              Follow us on Instagram
            </a>
            <BookTable />
          </div>
          <div className="footer-grid-item">
            <div className="footer-text-container">
              <h3 className="footer-text">Where to find us.</h3>
              <p className="footer-text">Sebastianspl. 3, </p>
              <p className="footer-text">80331,</p>
              <p className="footer-text"> München</p>
            </div>
          </div>
          <div className="footer-grid-item map">
            <GoogleMaps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
