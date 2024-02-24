import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./routes/Cart";
import ProductList from "./routes/ProductList";

function App() {
  return (
    <div>
      <NavBar />

      <hr />

      <ProductList />

      <hr />

      <Cart />
    </div>
  );
}

export default App;
