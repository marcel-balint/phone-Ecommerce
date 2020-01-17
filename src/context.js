import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

//Context API gives access to 'Provider' and 'Consumer'
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  };

  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
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
