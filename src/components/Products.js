import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "./Product";
const Products = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 justify-items-center p-10">
      {products.map((product, i) => {
        return <Product key={i} product={product} />;
      })}
    </div>
  );
};

export default Products;
