import React from "react";
import "./Hero.css";
import NavigateBar from "./NavigateBar";
const Hero = () => {
  return (
    <div className="HeroContainer">
      <NavigateBar />
      <div className="HeroContent">
        <div className="HeroItems">
          <h1 className="Sologan">Our Sologan</h1>
          <p>Ready in 5 minutes</p>
          <div className="ButtonField">
            <button className="Button1">Place order</button>
            <button className="Button2">Reserve table</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
