import alertify from "alertifyjs";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useStore } from "../../store";
import { logout } from "../../store/user/userAction";
import { isEmployee, isManager } from "../../utils/auth";
import UserMenu from "./UserMenu";
const Topbar = () => {
  const { userState, dispatchUser } = useStore();
  const { user, isUserLogin } = userState;
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location.pathname);

  const handleLogout = () => {
    alertify.confirm(
      "Logout",
      "Are you sure want to logout?",
      () => {
        dispatchUser(logout());
        localStorage.removeItem("token");
        navigate("/");
      },
      () => {
        console.log("logout iptal edildi");
      }
    );
  };
  return (
    // <!-- TOP BAR START -->
    <div className="fixed-top topbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="/assets/images/logo.png" alt="logo" />
          </Link>
          <div className="navbar-option mini d-lg-none ms-auto">
            <div className="navbar-option-item">
              {isUserLogin ? (
                <DropdownButton
                  id="dropdown-basic-button"
                  title={`${user.firstName} ${user.lastName}`}
                  size="md"
                  align="end"
                >
                  {isEmployee(user.roles) && (
                    <>
                      <Dropdown.Item as={Link} to="/employee/users">
                        User Management
                      </Dropdown.Item>

                      <Dropdown.Divider />
                    </>
                  )}
                  {isManager(user.roles) && (
                    <>
                      <Dropdown.Item as={Link} to="/manager/users">
                        User Management
                      </Dropdown.Item>

                      <Dropdown.Divider />
                    </>
                  )}

                  <Dropdown.Item as={Link} to="/profile">
                    My Profile
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/account">
                    My Accounts
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/transfer">
                    My Transfers
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </DropdownButton>
              ) : (
                <Link to="/authentication">
                  <i className="flaticon-login"></i>
                </Link>
              )}
            </div>
          </div>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
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
        </div>
        <UserMenu />
      </nav>
    </div>
    // <!-- TOP BAR END -->
  );
};
export default Topbar;
