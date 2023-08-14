import React from "react";

import Hero from "./Hero/Hero";

import "./Home.scss";
import InstaFeed from "./InstaFeed/InstaFeed";
import MidBanner from "./MidBanner/MidBanner";

const Home = () => {
  return (
    <div>
      <Hero />
      <MidBanner />
      <InstaFeed />
    </div>
  );
};

export default Home;
