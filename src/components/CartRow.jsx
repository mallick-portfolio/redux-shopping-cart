import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQty,
  decrementQty,
  removeItem,
} from "../redux/cart/cartSlice.js";
const CartRow = ({ cart, index }) => {
  const dispatch = useDispatch();
  const { id, title, price, qty } = cart;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>
        <div>
          <button
            onClick={() => dispatch(decrementQty(id))}
            className="text-xl font-bold mr-4"
          >
            -
          </button>
          <span>{qty}</span>
          <button
            onClick={() => dispatch(incrementQty(id))}
            className="text-xl font-bold ml-4"
          >
            +
          </button>
        </div>
      </td>
      <td>${price * qty}</td>
      <td>
        <button onClick={() => dispatch(removeItem(id))} className="text-xl">
          x
        </button>
      </td>
    </tr>
  );
};

export default CartRow;
