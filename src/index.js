import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import Product Provider
import { ProductPovider } from "./context/ProductContext";
import ShowSidebarProvider from "./context/ShowSidbarContext";
import ShoppingCartProvider from "./context/ShoppingCartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductPovider>
      <ShowSidebarProvider>
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </ShowSidebarProvider>
    </ProductPovider>
  </React.StrictMode>
);
