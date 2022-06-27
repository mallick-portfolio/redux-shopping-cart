import "./App.css";
import CartItems from "./components/CartItems.jsx";
import Products from "./components/Products.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex bg-white overflow-hidden justify-between py-5 h-screen">
        <div className="w-4/6">
          <Products />
        </div>
        <div className="w-2/6">
          <CartItems />
        </div>
      </div>
    </div>
  );
}

export default App;
