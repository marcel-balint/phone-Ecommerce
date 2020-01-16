import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";

class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    console.log(storeProducts);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title title="the products" />
            <div className="row"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
