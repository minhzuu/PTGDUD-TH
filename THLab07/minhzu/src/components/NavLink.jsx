import React from "react";
import { useNav } from "../context/NavContext";

const NavLink = ({ icon, children, path, onClick }) => {
  const { activeNavItem, setActive } = useNav();
  const isActive = activeNavItem === children;

  const handleClick = (e) => {
    e.preventDefault();
    setActive(children);

    // If an onClick handler was provided, call it with the nav item name
    if (onClick) {
      onClick(children, path);
    }
  };

  return (
    <li
      className={`
        ${
          isActive
            ? "bg-pink-500 text-white"
            : "text-gray-600 hover:bg-gray-100"
        } 
        rounded-md p-2 flex items-center cursor-pointer transition-colors duration-200
      `}
      onClick={handleClick}
      role="button"
      aria-current={isActive ? "page" : undefined}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {children}
    </li>
  );
};

export default NavLink;
