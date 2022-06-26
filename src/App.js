import './App.css';
import CartItems from './components/CartItems.jsx';
import Products from './components/Products.jsx';

function App() {
  return (
    <div className="flex justify-between container px-12 mx-auto mt-10">
      <Products />
      <CartItems />
    </div>
  );
}

export default App;
