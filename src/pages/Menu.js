import React from "react";
import "./Menu.css";
import { Outlet, NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <div>
        <nav className="menu">
          <h1>AB</h1>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Menu;
