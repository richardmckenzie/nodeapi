import React from "react";
import Product from "./Product";
import "../styles/css/Cart.css";

const Cart = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => (
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <div>
      <img
        src="/images/cart.png"
        className="cartimage"
        height="24"
        width="24"
      />
    </div>
  );
};

export default Cart;
