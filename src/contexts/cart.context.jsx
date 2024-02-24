import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addItem: () => {},
});

export function CartProvider(props) {
  const storageItems = sessionStorage.getItem("cartItems");
  const [items, setItems] = useState(
    storageItems === null ? [] : JSON.parse(storageItems)
  );

  const addItem = (item) => {
    const cartItems = [...items, item];
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(item);
    setItems(cartItems);
  };

  return (
    <CartContext.Provider
      value={{
        items: items,
        addItem: addItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
