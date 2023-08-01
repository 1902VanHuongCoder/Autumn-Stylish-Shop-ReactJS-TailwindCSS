import React, { useContext, useEffect } from "react";
//import Hero
import Hero from "./Hero";
import Products from "./Products";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
  const { setProducts } = useContext(ProductContext);
  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      <Hero />
      <Products />
    </div>
  );
};

export default Home;
