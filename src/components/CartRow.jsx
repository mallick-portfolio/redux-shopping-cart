import React from "react";

const CartRow = ({cart, index}) =>{
  const {title, des, price, qty} = cart
  console.log(cart)
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{qty}</td>
      <td>${price * qty}</td>
      <td className="text-xl">x</td>
    </tr>
  );
};

export default CartRow;
