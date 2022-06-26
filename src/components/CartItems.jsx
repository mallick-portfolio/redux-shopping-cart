import React from "react";

const CartItems = () => {
  return (
    <div className="w-full bg-[#e4dfdf] rounded-md ml-2 px-2 pt-5 h-[calc(100%_-_10rem)] mb-12">
      <h4>List of items you have selected</h4>

      <div className="mt-4">
        <table className="w-full px-4 text-sm text-left">
          <thead className="text-xs uppercase">
            <tr className="py-1">
              <th >
                Sr No
              </th>
              <th >
                Item Name
              </th>
              <th >
                Qty
              </th>
              <th >
                Price
              </th>
              <th >
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
              
              >
                Apple MacBook Pro 17"
              </td>
              <td>Sliver</td>
              <td>Laptop</td>
              <td>$2999</td>
              <td className="text-xl">x</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItems;
