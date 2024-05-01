import { createContext, useEffect, useState } from "react";
export const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
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
    // get users list from api
    fetch("http://localhost:5000/user")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserList(data);
      });
  }, []);

  const value = [
    {
      productList: productList,
      cartList: cartList,
      userList: userList,
    },
  ];

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
