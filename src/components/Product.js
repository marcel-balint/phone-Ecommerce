import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
              className="card-btn"
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
            <p className="align-self-center title mb-0 ">
              {this.props.product.title}
            </p>
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

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card-footer {
      background: #eee;
    }
    .title {
      color: rgb(60, 200, 255);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .card-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: #000;
    border: none;
    color: #fff;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translateY(100%);
    transition: all 0.5s linear;
  }
  .img-container:hover .card-btn {
    transform: translate(0);
  }
`;
export default Product;
