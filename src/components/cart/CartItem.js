import React from "react";

const CartItem = ({ item, value }) => {
  const { id, title, img, price, count } = item;
  const { incerment, decrement, removeItem } = value;

  return (
    <div className="row my-1 text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        ></img>
      </div>
    </div>
  );
};

export default CartItem;
