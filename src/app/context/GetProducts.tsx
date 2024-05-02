import { createContext, useEffect, useState } from "react";
export const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [trigger, setTrigger] = useState(0);

  // get product list from api
  const fetchProduct = () => {
    fetch("http://localhost:5000/product")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductList(data);
      });
  };

  // get cart list from api
  const fetchCart = () => {
    fetch("http://localhost:5000/cart")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCartList(data);
      });
  };

  // get users list from api
  const fetchUser = () => {
    fetch("http://localhost:5000/user")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserList(data);
      });
  };

  useEffect(() => {
    fetchProduct();
    fetchCart();
    fetchUser();
  }, [trigger]);

  const value = [
    {
      productList: productList,
      cartList: cartList,
      userList: userList,
      trigger: setTrigger,
    },
  ];

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
