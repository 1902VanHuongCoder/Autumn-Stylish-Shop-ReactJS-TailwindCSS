import React, { useContext } from "react";
//import AiFillEye icon
import { AiFillEye } from "react-icons/ai";
//import Provider
import { ProductContext } from "../context/ProductContext";
//import Provider
import { ShoppingCartContext } from "../context/ShoppingCartContext";
const Product = ({ product }) => {
  const { products } = useContext(ProductContext);
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

  const handleAddProductToCart = (id) => {
    console.log(shoppingCart);
    const product = products.find((item) => item.id === id);
    const haveAlreadyAdded = shoppingCart.find((item) => item.id === id);
    if (haveAlreadyAdded) {
      console.log("product is added...");
      setShoppingCart(
        shoppingCart.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        })
      );
    } else {
      setShoppingCart([...shoppingCart, { ...product, amount: 1 }]);
    }
  };
  return (
    <div className="w-[350px] h-[500px] p-2">
      <div className="relative w-full h-[300px] flex justify-center items-center group overflow-hidden">
        <img src={product.image} alt={product.title} className="h-full" />
        <div className="absolute w-full h-full hidden group-hover:block bg-[rgba(0,0,0,.3)]"></div>
        <div className="absolute group-hover:h-fit w-fit right-[-60px] h-[80px] group-hover:right-[145px] transition-all">
          <div
            onClick={() => {
              handleAddProductToCart(product.id);
            }}
            className="h-[60px] w-[60px] bg-white flex justify-center items-center cursor-pointer"
          >
            +
          </div>
          <div className="h-[60px] w-[60px] bg-red-500 text-white flex justify-center items-center cursor-pointer">
            <AiFillEye />
          </div>{" "}
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-lg mb-4">{product.title}</h1>
        <div className="flex items-center mb-4">
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
            {product.rating.rate}
          </p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <p className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
            {product.rating.count} reviews
          </p>
        </div>
        <div className="flex justify-between items-center px-4">
          <span className="font-semibold">
            <sup className="mr-1">$</sup>
            {product.price}
          </span>
          <span>{product.category}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
