import React from "react";

const CartRow = ({cart, index}) =>{

  return (
    <tr>
      <td>{index + 1}</td>
      <td>Sliver</td>
      <td>Laptop</td>
      <td>$2999</td>
      <td className="text-xl">x</td>
    </tr>
  );
};

export default CartRow;
