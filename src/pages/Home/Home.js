import React from "react";

import Hero from "./Hero/Hero";

import "./Home.css";
import InstaFeed from "./InstaFeed/InstaFeed";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="mid-banner">
        <div className="mid-title">
          <h1 className="title">The Grande Way</h1>
        </div>
        <div className="mid-title">
          <h2 className="sub-title">AUTHENTIC NEAPOLITAN PIZZA</h2>
        </div>
        <div className="mid-title">
          <h3 className="text">
            For us it’s all about the pizza. Just like in Naples, our dough is
            made on site every day, takes 24 hours to double ferment and just 60
            seconds to cook. It is soft, light and floppy… so fold for strength
            or tuck in with a knife and fork. Enjoy.
          </h3>
        </div>
        <div className="mid-title-box">
          <a className="title" href='https://www.instagram.com/ryanjsmillie/'>Follow us on Instagram</a>
        </div>
        <InstaFeed />
      </div>
    </div>
  );
};

export default Home;
