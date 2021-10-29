import React from "react";
import "./Hero.css";
import NavigateBar from "./NavigateBar";
const Hero = () => {
  return (
    <div className="HeroContainer">
      <NavigateBar />
      <div className="HeroContent">
        <div className="HeroItems">
          <h1>Sologan</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
