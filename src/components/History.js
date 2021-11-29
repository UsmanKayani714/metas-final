import React from "react";
import "./History.css";
import history from "../assets/history.webp";
import attibute from "../assets/attributes.webp";
const History = () => {
  return (
    <>
      <div className="container-fluid bg-purple">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-md-5 bg-green d-flex justify-content-center">
              <img src={history} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img src={attibute} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
