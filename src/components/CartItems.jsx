import React from "react";
import CartRow from "./CartRow.jsx";
import { useSelector } from "react-redux";
const CartItems = () => {
  const carts = useSelector((state) => state.cart.cart);
  return (
    <div className="w-full bg-[#e4dfdf] rounded-md ml-2 px-2 pt-5 h-[calc(100%_-_10rem)] mb-12">
      <h4>List of items you have selected</h4>

      <div className="mt-4">
        <table className="w-full px-4 text-sm text-left">
          <thead className="text-xs uppercase">
            <tr className="py-1">
              <th>Sr No</th>
              <th>Item Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!carts.length
              ? ""
              : carts.map((cart, index) => (
                  <CartRow key={cart.id} index={index} />
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItems;
