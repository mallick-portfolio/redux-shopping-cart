import React from "react";
import productImg from "../assets/images/150.png";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cart/cartSlice.js";

const ProductCart = ({ product }) =>{
  const dispatch = useDispatch();
  const addToCart = (product) =>{
    let qty = 1;
    dispatch(addItem({ ...product, qty }));
  };
  return (
    <div
      key={product.id}
      className="flex px-2 py-6 justify-between items-end bg-[#e4dfdf] rounded-md"
    >
      <div className="flex items-center w-full">
        <img className="w-28" src={productImg} alt="" />
        <div className="ml-4">
          <h3 className="text-3xl mb-2">{product?.title}</h3>
          <p className="text-sm">{product?.des}</p>
        </div>
      </div>
      <div className="w-auto ml-1">
        <button
          onClick={() => addToCart(product)}
          className="px-2 py-1 mb-2 rounded-md bg-[#ccc] text-xs"
        >
          Add to list
        </button>
        <button className="px-2 py-1 rounded-md bg-[#ccc] text-xs">
          Details
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
