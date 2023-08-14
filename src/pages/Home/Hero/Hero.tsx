import React from "react";

import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero-img container">
      <div className="hero-content">
        <h1 className="heading-primary">Pizza Napoletana</h1>
        <p className="sub-text">In the heart of the Bavarian capital!</p>
        <p className="sub-text">
          Book online or call{" "}
          <span className="phone-number">+49 152 58780807</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
