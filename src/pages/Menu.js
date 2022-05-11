import React from "react";
import "./Menu.css";
import { Outlet, Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <div>
        <nav className="menu">
          <h1>AB</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Menu;
