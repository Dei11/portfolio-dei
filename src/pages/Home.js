import React from "react";

import "./Home.css";
import { Outlet, NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="main">
      <div className="content">
        <h1 className="text-4xl">Andrei Bogdan</h1>
        <br />
        <h1 className="text-base md:text-4xl ">Programmer • Web Developer</h1>
        <br />
        <h2 className="italic text-2xl hover:underline">
          <NavLink to="/contact">contact</NavLink>
        </h2>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
