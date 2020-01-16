import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

class Product extends Component {
  //const {id , title, img, price, inCart} = this.props.product;
  render() {
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={console.log("clicked")}>
            <Link to="/details">
              <img
                src={this.props.product.img}
                alt="product"
                className="card-img-top"
              ></img>
              <button className="cart-btn"></button>
            </Link>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
const ProductWrapper = styled.div``;
export default Product;
