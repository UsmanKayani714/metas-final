import React from "react";
import "./footer.css";
import logo from "../assets/logo.webp";
import CountDown from "./CountDown";

const Footer = () => {
  return (
    <>
      <div className="container-fluid purple">
        <div className="row h-100">
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 flexbox">
            <img className="logo-style" src={logo} />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 flexbox">
            <a class="nav-link" href="#">
              <i class="fab fa-2x fa-discord"></i>
            </a>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 flexbox">
            <CountDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
