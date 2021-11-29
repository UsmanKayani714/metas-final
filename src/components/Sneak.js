import React from "react";
import "./Sneak.css";
import sneak from "../assets/sneak.webp";
import Slider from "./Slider";

const Sneak = () => {
  return (
    <>
      <div className="container-fluid light-pink py-5">
        <div className="container">
          <h1 className="text-center">
            <img src={sneak} alt="" className="img-fluid" />
          </h1>
          <Slider />
        </div>
      </div>
    </>
  );
};

export default Sneak;
