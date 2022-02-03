import React from "react";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "./UserMenu";

const Menu = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    //  <!-- MENU START-->
    <div className="main-nav">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light">
          <Link to="/" className="navbar-brand">
            <img src="/assets/images/logo.png" alt="logo" />
          </Link>

          <div
            className="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    location.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={
                    location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/service"
                  className={
                    location.pathname === "/service"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/pricing"
                  className={
                    location.pathname === "/pricing"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className={
                    location.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- USER MENU START --> */}
          <UserMenu />
          {/* <!-- USER MENU END --> */}
        </nav>
      </div>
    </div>
    //  <!-- MENU END-->
  );
};

export default Menu;
