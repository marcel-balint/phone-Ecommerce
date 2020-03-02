import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import { ProductConsumer } from "../../context";
import CartList from "./cartList";
import CartTotals from "./CartTotals";

class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title title="The cart" />;
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              return <Title title="Your cart is empty" />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
