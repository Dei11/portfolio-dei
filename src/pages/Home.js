import React from "react";
import Body from "../components/Body";
import videoBg from "../video/video.mp4";

function Home() {
  return (
    <div className="main">
      <Body />
      <video src={videoBg} autoPlay loop muted />
    </div>
  );
}

export default Home;
