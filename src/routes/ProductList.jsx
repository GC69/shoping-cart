import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

export default function ProductList() {
  const products = [
    { id: 1, title: "Product 1", price: 20 },
    { id: 2, title: "Product 2", price: 50 },
  ];

  const cartContext = useContext(CartContext);

  const addToCart = (product) => {
    // vom chema fuctia care adauga produsul in cos
    cartContext.addItem(product);
  };

  return (
    <div>
      Product list page!
      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Price: {item.price}</p>
          <button onClick={() => addToCart(item)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
