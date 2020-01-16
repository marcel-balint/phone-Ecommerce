import React, { Component } from "react";

const ProductContext = React.createContext();
//gives access to 'Provider' and 'Consumer'

class ProductProvider extends Component {
  render() {
    return (
      //Provider
      <ProductContext.Provider value="hello from context">
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

//Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
