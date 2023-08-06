import React from "react";
import { NavLink } from "react-router-dom";

const ActiveClass = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "sm:border-b-4 sm:border-white text-white font-bold sm:p-2" : "")}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveClass;
