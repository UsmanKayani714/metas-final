import React from "react";
import ryan from "../assets/ryron.png";
import downfall from "../assets/downfall.webp";

const Downfall = () => {
  return (
    <>
      <div className="container-fluid bg-green">
        <div className="container">
          <div className="row justify-content-between pt-5 align-items-center">
            <div className="col-md-5">
              <img src={ryan} alt="" className="fluid-small" />
            </div>
            <div className="col-md-5">
              <img src={downfall} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Downfall;
