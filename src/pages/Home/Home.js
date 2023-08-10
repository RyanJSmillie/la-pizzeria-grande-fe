import React from "react";

import Hero from "./Hero/Hero";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="mid-banner">
        <div className="mid-title">
          <h1 className="title">The Grande Way</h1>
          <h2 className="sub-title">AUTHENTIC NEAPOLITAN PIZZA</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
