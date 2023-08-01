import React, { createContext, useEffect, useState } from "react";
export const ShoppingCartContext = createContext();
const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [amountProductsInShoppingCart, setAmountProductsInShoppingCart] =
    useState(0);
  const [total, setTotal] = useState(0);
  const handleDecreaseProductAmount = (id) => {
    setShoppingCart(
      shoppingCart.map((item) => {
        if (item.id === id) {
          if (item.amount === 1) {
            return item;
          } else {
            return { ...item, amount: item.amount - 1 };
          }
        } else {
          return item;
        }
      })
    );
  };
  const handleIncreaseProductAmount = (id) => {
    setShoppingCart(
      shoppingCart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    const amount = shoppingCart.reduce(getSum, 0);
    function getSum(prevalue, currentvalue) {
      return prevalue + currentvalue.amount;
    }
    setAmountProductsInShoppingCart(amount);
  }, [shoppingCart]);

  useEffect(() => {
      const total = shoppingCart.reduce(getSum, 0);
      function getSum(prevalue, currentvalue) {
        return prevalue + (currentvalue.amount * currentvalue.price);
      }
      setTotal(total);
  },[shoppingCart])
  return (
    <ShoppingCartContext.Provider
      value={{
        total,
        shoppingCart,
        setShoppingCart,
        handleDecreaseProductAmount,
        handleIncreaseProductAmount,
        amountProductsInShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
