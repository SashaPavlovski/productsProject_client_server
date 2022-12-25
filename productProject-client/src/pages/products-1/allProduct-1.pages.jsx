import React, { useState, useEffect, useContext } from "react";

import { getProductsAsync } from "../../components/servers/servers.components";
import { ProductContainer } from "./../../components/product.container/product.container.components";
import { ThemeContext } from "./../../context/theme.context";

export const Products_1 = () => {
  const { setProduct } = useContext(ThemeContext);
  const [arrProducts, setArrProducts] = useState([]);

  let getProducts = async () => {
    let ProductsArr = await getProductsAsync();
    let arrPro = Object.values(ProductsArr);

    setArrProducts(arrPro);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const productDataUrl = (objectProduct) => {
    console.log("aa", objectProduct);
    setProduct(objectProduct);
  };

  return (
    <>
      {arrProducts.length > 0
        ? arrProducts.map((p) => {
            return (
              <>
                <ProductContainer btnLink={productDataUrl} productObject={p} />
              </>
            );
          })
        : "loading"}
    </>
  );
};
