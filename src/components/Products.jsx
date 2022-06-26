import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart.jsx";
const Products = () =>{
  const [products, setProducts] = useState([]);
  useEffect(() =>{
    const loadProduuct = async () =>{
      await fetch("products.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };
    loadProduuct();
  }, []);
  

  return (
    <div className="grid grid-cols-2 gap-5 h-[calc(100%_-_10rem)] overflow-y-auto product-scroll pr-4">
      {products.map((product) => (
        <ProductCart key={product.id} product={product}  />
      ))}
    </div>
  );
};

export default Products;
