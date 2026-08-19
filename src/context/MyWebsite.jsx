import { createContext, useState } from "react";

export const MyShop = createContext();

export const MyShopContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [cartItem, setCartItems] = useState([]);

  return (
    <MyShop.Provider
      value={{
        cartItem,
        setCartItems,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </MyShop.Provider>
  );
};