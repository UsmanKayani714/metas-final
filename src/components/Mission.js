import React from "react";
import "./Mission.css";
import elephant from "../assets/elephant.webp";
import missionbg from "../assets/missionbg.webp";
const Mission = () => {
  return (
    <>
      <div className="container-fluid bg-green">
        <div className="row align-items-center">
          <div className="col-md-5 text-black text-center py-5">
            <h1 className="text-center">Our Charity Mission</h1>
            <h5>Re:wild</h5>
            <p className="px-5">
              Being a Naked Meta means you love to explore at every chance you
              get.
              <br />
              Our planet Earth needs to be conserved and protected so the Naked
              Metas can experience all the natural beauty C-137 has to offer.
              Right now Climate change, extinction, and pandemics are staring us
              in the face now more than ever. Our goal is to donate $150,000 of
              the Naked Metas launch funds to support Re:wild, a movement to
              build a world in balance with the wild. A group that acts to
              conserve the planet’s most threatened areas and species. Let’s get
              behind this team and Leonardo DiCaprio showing them what a united
              NFT community has to offer. In our discord server, we have a
              channel dedicated to Climate change, and the wild it's open for
              anyone to post updates in and get involved!
            </p>
            <a href="" className="btn rounded-0 btn-visit">
              Visit Website
            </a>
          </div>
          <div className="col-md-7 missionbg">
            <img src={elephant} alt="" className="py-5 px-5 img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
