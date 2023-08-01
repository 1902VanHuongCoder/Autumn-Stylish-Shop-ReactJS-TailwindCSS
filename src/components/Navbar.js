import React, { useContext } from "react";
//import logo
import logo from "../img/logo.svg";
//import shopping bag icon
import { AiOutlineShopping } from "react-icons/ai";
//import Link
import { Link } from "react-router-dom";
//import Custom hook
import useScrollPosition from "../hooks/useScrollPosition";
//import ShowSidebarContext
import { ShowSidebarContext } from "../context/ShowSidbarContext";
//import Provider
import { ShoppingCartContext } from "../context/ShoppingCartContext";
const Navbar = () => {
  const { showSidebar, setShowSidebar } = useContext(ShowSidebarContext);
  const { shoppingCart } = useContext(ShoppingCartContext);
  const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={className(
        scrollPosition > 0 ? "fixed backdrop-blur-sm" : "relative bg-white",
        "flex justify-between items-center px-10 py-2 w-full max-w-[1500px] z-10"
      )}
    >
      <Link to="/">
        <img src={logo} alt="logo" width={40} height={40} />
      </Link>
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className="hover:bg-slate-200 w-10 h-10 relative flex justify-center items-center cursor-pointer"
      >
        <AiOutlineShopping className="text-2xl" />{" "}
        <div className="absolute bg-white h-4 w-4 flex justify-center items-center rounded-full text-red-400 bottom-0 right-0 text-sm">
          {shoppingCart.length}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
