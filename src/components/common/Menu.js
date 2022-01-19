import React from "react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

const Menu = () => {
  return (
    <div className="main-nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand" href="index.html">
            <img src="assets/images/logo.png" alt="logo" />
          </a>
          <div
            className="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/service" className="nav-link">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/pricing" className="nav-link">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <UserMenu />
        </nav>
      </div>
    </div>
  );
};

export default Menu;
