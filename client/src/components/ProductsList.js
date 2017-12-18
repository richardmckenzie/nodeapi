import React from "react";

const ProductsList = ({ title, children }) => (
  <div>
    <h4>{title}</h4>
    <div>{children}</div>
  </div>
);

export default ProductsList;
