import React, { useContext } from "react";
import { ShowSidebarContext } from "../context/ShowSidbarContext";
//import Arrow icon
import { BiRightArrowAlt } from "react-icons/bi";
//import Provider
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import CartProduct from "./CartProduct";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useContext(ShowSidebarContext);
  const { shoppingCart, amountProductsInShoppingCart, total } =
    useContext(ShoppingCartContext);
  return (
    <div
      className={`fixed top-0 ${
        showSidebar ? "right-0" : "right-[-100%]"
      } h-screen w-full md:w-[60%] lg:w-[50%] xlg:[50%] bg-white z-10 transition-all duration-500 shadow-[0_35px_30px_-15px_rgba(0,0,0,0.3)] `}
    >
      <h1 className="py-5 pl-5 pr-8 border-b border-solid border-[rgba(0,0,0,.2)] bg-slate-100 flex justify-between items-center">
        <span>Shopping Bags ({amountProductsInShoppingCart})</span>
        <span
          onClick={() => setShowSidebar(false)}
          className="text-xl w-10 h-10 rounded-full flex justify-center items-center border border-solid border-[rgba(0,0,0,.3)]"
        >
          <BiRightArrowAlt />
        </span>
      </h1>
      <div className="mb-2">
        <div className="w-full px-4 py-4 mb-1">
          <span className="text-2xl">Total: </span>
          <span className="text-2xl font-medium"><sup>$</sup>{parseFloat(total).toFixed(2)}</span>
        </div>
        <div className="px-4">
            <button className="bg-red-300 w-full py-4 text-white text-xl uppercase">Buy All Product</button>
        </div>
      </div>
      <div className="w-full p-7 h-[580px] md:h-[700px] lg:h-[500px] overflow-y-scroll">
        {shoppingCart?.map((product, i) => {
          return <CartProduct product={product} key={i} />;
        })}
      </div>
      
    </div>
  );
};

export default Sidebar;
