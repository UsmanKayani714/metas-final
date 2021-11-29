import React from "react";
import "./Meta.css";
import meta from "../assets/meta.png";
import stone from "../assets/stone.gif";
const Meta = () => {
  return (
    <>
      <div className="container-fluid purple-bg">
        <div className="container py-5">
          <br />
          <div className="row align-items-center py-5">
            <div className="col-md-6">
              <img src={meta} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src={stone} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meta;
