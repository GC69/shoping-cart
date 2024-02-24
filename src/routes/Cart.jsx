import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

export default function Cart() {
  const cartContext = useContext(CartContext);

  return (
    <div>
      Cart page!
      {cartContext.items.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
}
