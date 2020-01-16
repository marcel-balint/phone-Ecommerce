import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

//gives access to 'Provider' and 'Consumer'
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  };

  handleDetail = () => {
    console.log("hello form detail");
  };

  addToCart = () => {
    console.log("hello from add to cart");
  };

  render() {
    return (
      //Provider
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

//Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
