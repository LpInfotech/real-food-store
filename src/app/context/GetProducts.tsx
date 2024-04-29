import { createContext, useEffect, useState } from "react";
export const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
  console.log("called");
    // get product list from api
    fetch("http://localhost:5000/product")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductList(data);
      });

    // get cart list from api
    fetch("http://localhost:5000/cart")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCartList(data);
      });
  }, []);

  const value = [
    {
      productList: productList,
      cartList: cartList,
    },
  ];

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
