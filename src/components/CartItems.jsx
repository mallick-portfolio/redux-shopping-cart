import React, { useState } from "react";
import CartRow from "./CartRow.jsx";
import { useSelector } from "react-redux";
import ConfirmModal from "./ConfirmModal.jsx";
const CartItems = () => {
  const [show, setShow] = useState(false);
  const carts = useSelector((state) => state.cart.cart);
  return (
    <>
      <div className="w-full relative bg-[#e4dfdf] rounded-md ml-2 px-2 pt-5 h-full mb-12">
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
                    <CartRow key={cart.id} cart={cart} index={index} />
                  ))}
            </tbody>
          </table>
          <h4 className="text-right mr-12 mt-6">
            Total{" "}
            <span>
              {carts
                .map((cart) => {
                  return cart.totalPrice;
                })
                .reduce((a, b) => a + b, 0)}
            </span>
          </h4>
        </div>

        <div className="absolute top-[85%] left-36">
          <button
            onClick={() => setShow(true)}
            className="my-8 float-right px-5 py-2 bg-[#444] rounded-md text-white text-sm font-bold  focus:outline-none"
          >
            Confirm
          </button>
        </div>
      </div>
      <ConfirmModal show={show} setShow={setShow} />
    </>
  );
};

export default CartItems;
