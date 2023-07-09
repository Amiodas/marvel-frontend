import React from "react";
import { NavLink } from "react-router-dom";

const ActiveClass = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "border-b-4 border-primary text-primary font-bold p-2" : "")}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveClass;
