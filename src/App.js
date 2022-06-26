import "./App.css";
import CartItems from "./components/CartItems.jsx";
import Products from "./components/Products.jsx";

function App() {
  return (
    <div className="flex bg-white overflow-hidden justify-between container px-2  mx-auto h-screen py-5">
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
