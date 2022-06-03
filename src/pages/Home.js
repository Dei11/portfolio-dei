import React from "react";
import Body from "../components/Body";
import videoBg from "../assets/video.mp4";
import "./Home.css";
import { Outlet, NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="main">
      {/* <Body /> */}
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1 className="text-4xl">Hello, I'm Andrei</h1>
        <br />
        <h2 className="text-2xl">
          <NavLink to="/contact">contact</NavLink>
        </h2>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
