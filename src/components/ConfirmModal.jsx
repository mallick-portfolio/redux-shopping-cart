import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { confirmOrder } from "../redux/cart/cartSlice.js";
const ConfirmModal = ({ show, setShow, carts, setModal }) => {
  const dispatch = useDispatch();
  const doneOrder = () => {
    dispatch(confirmOrder());
    setModal(true);
  };

  return (
    <div
      className={`bg-gray-500  text-white rounded-lg w-[450px] md:max-w-md md:mx-auto p-4  mb-4 mx-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="mt-4 md:mt-0 md:ml-6 text-center">
        {!carts.length && (
          <div>
            <RiErrorWarningLine className="font-bold text-5xl ml-36 mb-4" />
            <p>Please add item first</p>
          </div>
        )}
      </div>
      {carts.length ? (
        <>
          <div className="text-center ">
            <h3 className="text-3xl">Are you Sure</h3>
            <p>Items below will be confirmed</p>
            <div className="flex justify-between px-12">
              <p className="font-semibold">Items</p>
              <p className="font-semibold">Qty</p>
            </div>
            {carts.map((cart) => (
              <div key={cart.id} className="flex justify-between px-12">
                <p className="font-semibold">{cart.title}</p>
                <p className="font-semibold">{cart.qty}</p>
              </div>
            ))}
            <hr />
            <div className="text-right mr-12 text-xl">
              Total:
              <span>
                {carts
                  .map((cart) => {
                    return cart.totalPrice;
                  })
                  .reduce((a, b) => a + b, 0)}
              </span>
            </div>
          </div>
          <div className="text-center md:text-right mt-4 md:flex md:justify-end">
            <button
              onClick={() => setShow(false)}
              className="px-2 py-1 rounded-lg border font-semibold text-sm mt-4 mr-3
          "
            >
              Cancel
            </button>
            <button
              onClick={doneOrder}
              className="px-2 py-1 rounded-lg  font-semibold text-sm mt-4 bg-[#444]"
            >
              Confirm
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ConfirmModal;
