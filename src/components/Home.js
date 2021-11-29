import React from "react";
import "./Home.css";
import CountDown from "./CountDown";
import coming from "../assets/coming.webp";
import logo from "../assets/logof.webp";
import hero from "../assets/hero.webp";

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a class="navbar-brand" href="#">
              {/* Navbar */}
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto me-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Public Minting
                    <br />
                    10th Dec 2021
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fab fa-2x fa-discord"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row flex-lg-row-reverse align-items-center">
            <div className="col-md-6">
              <img src={logo} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 ">
              <img src={coming} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <CountDown />
            </div>
            <div className="col-md-6 ">
              <img src={hero} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
