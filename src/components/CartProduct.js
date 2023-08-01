import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const CartProduct = ({ product }) => {
  const { handleDecreaseProductAmount, handleIncreaseProductAmount } =
    useContext(ShoppingCartContext);
  return (
    <div className="mb-5 h-fit border border-solid border-[rgba(0,0,0,.1)]">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="h-[80px]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full"
          />
        </div>
        <div className="flex w-fit border border-solid border-[rgba(0,0,0,.1)]">
          <button
            onClick={() => handleDecreaseProductAmount(product.id)}
            className={`w-10 h-10 border-r border-solid border-[rgba(0,0,0,.1)]`}
          >
            -
          </button>
          <span className="w-10 h-10 flex justify-center items-center">
            {product.amount}
          </span>
          <button
            onClick={() => handleIncreaseProductAmount(product.id)}
            className="w-10 h-10 border-l border-solid border-[rgba(0,0,0,.1)] bg-red-100"
          >
            +
          </button>
        </div>
      </div>
      <div className="w-full px-4 pb-4">
        <p className="mb-1">{product.title}</p>
        <p className="flex justify-between items-center">
          <span>
            <span className="font-bold">Total:</span>
            <span className="ml-2">
              <sup>$</sup>
              {parseFloat(product.price * product.amount).toFixed(2)}
            </span>
          </span>
          <button className="hover:underline text-red-400">Buy Now</button>
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
