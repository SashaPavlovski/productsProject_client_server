import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import { NavBar } from "./../navBar/navBar.components";
import { Home, ContactUs, Products_2, Products_1, Aboute } from "../../pages";
import { ThemeContext } from "./../../context/theme.context";
import { ProductData } from "./../../components/product.data/product.data.components";

export const Main = () => {
  const [product, setProduct] = useState({});

  return (
    <ThemeContext.Provider value={{ product, setProduct }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/Products_2" element={<Products_2 />} />
        <Route path="/Products_1" element={<Products_1 />} />
        <Route path="/aboute" element={<Aboute />} />
        <Route
          path={`/ProductData${product.ProductID}`}
          element={
            <ProductData
              ProductName={product.ProductName}
              // UnitPrice={product.UnitPrice.Value}
              UnitsInStock={product.UnitInStock}
            />
          }
        />
      </Routes>
    </ThemeContext.Provider>
  );
};
