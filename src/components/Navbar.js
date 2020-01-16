import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class Navbar extends Component {
  render() {
    const style = {
      width: "40px",
      height: "40px",
      fill: "#000",
      stroke: "#fff",
      strokeWidth: 0.6
    };

    return (
      <NavWrapper className="navbar navbar-expand-sm  px-sm-5">
        <Link to="/">
          <svg style={style} viewBox="0 0 20 20">
            <path
              fill="none"
              d="M10,15.654c-0.417,0-0.754,0.338-0.754,0.754S9.583,17.162,10,17.162s0.754-0.338,0.754-0.754S10.417,15.654,10,15.654z M14.523,1.33H5.477c-0.833,0-1.508,0.675-1.508,1.508v14.324c0,0.833,0.675,1.508,1.508,1.508h9.047c0.833,0,1.508-0.675,1.508-1.508V2.838C16.031,2.005,15.356,1.33,14.523,1.33z M15.277,17.162c0,0.416-0.338,0.754-0.754,0.754H5.477c-0.417,0-0.754-0.338-0.754-0.754V2.838c0-0.417,0.337-0.754,0.754-0.754h9.047c0.416,0,0.754,0.337,0.754,0.754V17.162zM13.77,2.838H6.23c-0.417,0-0.754,0.337-0.754,0.754v10.555c0,0.416,0.337,0.754,0.754,0.754h7.539c0.416,0,0.754-0.338,0.754-0.754V3.592C14.523,3.175,14.186,2.838,13.77,2.838z M13.77,13.77c0,0.208-0.169,0.377-0.377,0.377H6.607c-0.208,0-0.377-0.169-0.377-0.377V3.969c0-0.208,0.169-0.377,0.377-0.377h6.785c0.208,0,0.377,0.169,0.377,0.377V13.77z"
            ></path>
          </svg>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link
              to="/"
              style={{ color: "#fff", fontSize: "1.4rem" }}
              className="nav-link"
            >
              <Anchor>Products</Anchor>
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"> Cart</i>
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
const Anchor = styled.span`
  color: #fff;
  &:hover {
    color: rgb(60, 200, 255);
  }
`;

const NavWrapper = styled.nav`
  background-color: rgba(58, 70, 79, 0.8);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export default Navbar;
