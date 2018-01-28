import React from "react";
import Product from "./Product";

const CartSummary = ({ products }) => {
  const hasProducts = products.length > 0;
  var productsTotal = 0;

  if (hasProducts) {
    products.forEach(function(value) {
      productsTotal = +value.quantity;
    });
  }

  return (
    <div>
      <i className="material-icons">shopping_cart</i>
      {hasProducts ? productsTotal : ""}
    </div>
  );
};

export default CartSummary;
