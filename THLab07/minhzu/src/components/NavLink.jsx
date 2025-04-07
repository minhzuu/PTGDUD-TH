import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNav } from "../context/NavContext";

const NavLink = ({ icon, children, to, onClick }) => {
  const { activeNavItem, setActive } = useNav();
  const location = useLocation();
  const isActive = location.pathname === to;

  const handleClick = () => {
    setActive(children);

    // If an onClick handler was provided, call it with the nav item name
    if (onClick) {
      onClick(children, to);
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
        rounded-md transition-colors duration-200
      `}
      role="button"
      aria-current={isActive ? "page" : undefined}
    >
      <Link
        to={to}
        className="p-2 flex items-center w-full h-full"
        onClick={handleClick}
      >
        {icon && <span className="mr-3">{icon}</span>}
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
