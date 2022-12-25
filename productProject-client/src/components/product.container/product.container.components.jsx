import React from "react";

import { Link } from "react-router-dom";

export const ProductContainer = ({ btnLink, productObject }) => {
  let { ProductName, UnitPrice, ProductID } = productObject;
  return (
    <>
      <Link
        onClick={() => btnLink(productObject)}
        to={`/ProductData${ProductID}`}
      >
        <h2>{ProductName}</h2>
        <div>unitPrice : {UnitPrice.Value}</div>
        <div>productID : {ProductID}</div>
      </Link>
    </>
  );
};
