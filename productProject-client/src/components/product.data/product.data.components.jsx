import React from "react";

export const ProductData = ({ ProductName, UnitPrice, UnitsInStock }) => {
  console.log(` ProductName : ${ProductName}`);
  console.log(` unitsInStock : ${UnitsInStock}`);

  return (
    <>
      <h1>{ProductName}</h1>
      <div>unitPrice : {UnitPrice}</div>
      <div>unitsInStock : {UnitsInStock}</div>
    </>
  );
};
