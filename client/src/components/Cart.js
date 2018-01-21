import React from "react";
import Product from "./Product";

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
      <i className="material-icons">shopping_cart</i>
    </div>
  );
};

export default Cart;
