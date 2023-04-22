import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo.svg";
import "./Navbar.css";

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/">
          <img src={Logo} alt="navbar-brand" />
        </Link>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link OurProducts" to="/">
                Our Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <button className="button-container">
                  <span className="m-2">
                    <i className="bi bi-cart"></i>
                  </span>
                  my cart
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  {
    /* <Link to="/cart" className="ms-auto">
        <button className="button-container">
          <span className="m-2">
            <i className="bi bi-cart"></i>
          </span>
          my cart
        </button>
      </Link> */
  }
}

export default navbar;
