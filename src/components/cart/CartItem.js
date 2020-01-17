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
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product</span> {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price</span> {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => {
                decrement(id);
              }}
            >
              -
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
