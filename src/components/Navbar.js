import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={Logo} alt="logo" className="navbar-brand"></img>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              product
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button>
            <i className="fas fa-cart-plus"> Cart</i>
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
