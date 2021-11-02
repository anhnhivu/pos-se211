import React from "react";
import { useHistory } from "react-router";
import "./Hero.css";
import NavigateBar from "./NavigateBar";
const Hero = () => {
  const history = useHistory();
  function gotoHomePage() {
    history.push("/homepage");
  }
  return (
    <div className="HeroContainer">
      <NavigateBar />
      <div className="HeroContent">
        <div className="HeroItems">
          <h1 className="Sologan">Taste the myth</h1>
          <p>Ready in 5 minutes</p>
          <div className="ButtonField">
            <button className="Button1" onClick={gotoHomePage}>
              Place order
            </button>
            <button
              className="Button2"
              onClick={() => {
                history.push("/reservepage");
              }}
            >
              Reserve table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
