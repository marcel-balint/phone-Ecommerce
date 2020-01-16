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
            </Link>
            <button
              className="cart-btn"
              disabled={this.props.product.inCart ? true : false}
              onClick={() => {
                console.log("in cart");
              }}
            >
              {this.props.product.inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus"></i>
              )}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{this.props.product.title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {this.props.product.price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
const ProductWrapper = styled.div``;
export default Product;
