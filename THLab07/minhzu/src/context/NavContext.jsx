import React, { createContext, useState, useContext } from "react";

// Create context
const NavContext = createContext();

// Provider component
export const NavProvider = ({ children }) => {
  const [activeNavItem, setActiveNavItem] = useState("Dashboard");

  // Function to update active nav item
  const setActive = (item) => {
    setActiveNavItem(item);
  };

  // Values to be provided to consumers
  const value = {
    activeNavItem,
    setActive,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

// Custom hook for using the context
export const useNav = () => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
