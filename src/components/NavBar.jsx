import { useContext } from "react";
import { UserContext } from "../contexts/User.context";
import { CartContext } from "../contexts/cart.context";

export default function NavBar() {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);

  return (
    <nav>
      <p>{userContext.user?.username}</p>

      {userContext.user === null ? (
        <button
          onClick={() => {
            userContext.setUser({ username: "Guest" });
          }}
        >
          {" "}
          Login
        </button>
      ) : (
        <button onClick={() => userContext.setUser(null)}>Log out</button>
      )}

      <p>Cart: {cartContext.items.length}</p>
    </nav>
  );
}
