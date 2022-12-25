import axios from "axios";

export const getProductsAsync = async () => {
  let urlFromServer = "http://localhost:7275/api/Priducts";
  let ProductsFromServer = await axios.get(urlFromServer);
  return ProductsFromServer.data;
};

export const addUserCommentAsync = async (userComment) => {
  console.log(userComment);

  await axios.post("http://localhost:7275/api/Priducts", userComment);
};
