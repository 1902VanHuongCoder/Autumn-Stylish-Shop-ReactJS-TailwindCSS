import React, { createContext, useState } from "react";
export const ShowSidebarContext = createContext();
const ShowSidebarProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <ShowSidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </ShowSidebarContext.Provider>
  );
};

export default ShowSidebarProvider;
