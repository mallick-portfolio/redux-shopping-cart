import "./App.css";
import CartItems from "./components/CartItems.jsx";
import Products from "./components/Products.jsx";

function App() {
  return (
    <div className="flex justify-between container px-2  mx-auto mt-10">
      <div className="w-4/6">
        <Products />
      </div>
      <div className="w-2/6">
        <CartItems />
      </div>
    </div>
  );
}

export default App;
