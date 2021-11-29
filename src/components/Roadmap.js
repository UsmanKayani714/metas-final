import React from "react";
import roadmapimg from "../assets/roadmap.webp";
import "./Roadmap.css";
import map from "../assets/map.webp";
import map2 from "../assets/rmdown.webp";

const Roadmap = () => {
  return (
    <>
      <div className="container-fluid bg-purple py-5 position-relative">
        <img src={map} alt="" className="imgfloat" />
        <div className="container">
          <div style={{marginTop: 75+'px'}}>
            <p className="text-center">
              <img src={roadmapimg} alt="" className="img-fluid" />
            </p>
            <div className="row align-items-center">
              <div className="col-4">
                <h1 className="text-center text-green">PRE-LAUNCH</h1>
              </div>
              <div className="col-8">
                <h5>
                  All giveaways & whitelist competitions will be on our Discord
                  server so come join our community of Metas.
                  <br />
                  (Win the chance to receive a FREE Naked Meta and other NFTs that
                  will be distributed during the public mint).
                </h5>
              </div>
            </div>
            <hr />
            <div className="row align-items-center">
              <div className="col-4">
                <h1 className="text-center text-green">15% Minted</h1>
              </div>
              <div className="col-8">
                <h5>
                  10 Naked Metas will be randomly given away to NFT owners as a
                  thank you to our early supporters.
                </h5>
              </div>
            </div>
            <hr />

            <div className="row align-items-center">
              <div className="col-4">
                <h1 className="text-center text-green">30% Minted </h1>
              </div>
              <div className="col-8">
                <h5>
                  1 / 1 Ultra Rare Naked Meta will be randomly given away to an
                  NFT owner.
                </h5>
              </div>
            </div>
            <hr />
            <div className="row align-items-center">
              <div className="col-4">
                <h1 className="text-center text-green">50% Minted</h1>
              </div>
              <div className="col-8">
                <h5>
                  $150,000 of funds will be donated to Re:wild a dedicated team
                  with founding board member Leonardo DiCaprio are on a serious
                  mission to help protect and restore our planet’s most vital
                  ecosystems, save and recover imperiled wildlife. Let's show them
                  our support!
                </h5>
              </div>
            </div>
            <hr />
            <div className="row align-items-center">
              <div className="col-4">
                <h1 className="text-center text-green">65% Minted</h1>
              </div>
              <div className="col-8">
                <h5>5 Naked Metas will be randomly given away to NFT owners.</h5>
              </div>
            </div>
            <hr />
            <div className="row align-items-center">
              <div className="col-4">
                <h1 className="text-center text-green">85% Minted</h1>
              </div>
              <div className="col-8">
                <h5>
                  4 ETH Giveaway randomly distributed just in case our owners
                  missed the chance to grab another Naked Meta, here’s the next
                  best thing.
                </h5>
              </div>
            </div>
            <hr />
            <div className="row align-items-center">
              <div className="col-4">
                <h1 className="text-center text-green">95% Minted</h1>
              </div>
              <div className="col-8">
                <h5>
                  The Naked Metas New York Times Square billboard ad - Yes let's
                  tick this one off the list. 3 Rare Naked Meta will be given away
                  through a competition open to the public linked to the billboard
                  ad (More details on this will be in our Discord).
                </h5>
              </div>
            </div>
            <hr />
            <div className="row align-items-center">
              <div className="col-4">
                <h1 className="text-center text-green">100% Minted!</h1>
              </div>
              <div className="col-8">
                <h5>
                  Now here is where things get interesting. Our goal for the Naked
                  Metas is long-term and as the NFT community continues to grow we
                  believe the best way to build and grow the Naked Metas is with
                  your help and ideas. In our Discord server, we have a channel
                  dedicated to future project ideas and input. Let's work on the
                  post-launch roadmap together!
                  <br />
                  <br />
                  So what will definitely be happening at 100%?
                  <br />
                  <br />
                  <ul>
                    <li>
                      The Naked Metas project will be listed on Rarity. tools
                    </li>
                    <li>
                      A wallet will be made upon collection launch to stabilize
                      the market floor price early on. We will have a buyback in
                      place for 1-2 months at the mint price on Opensea to help
                      ensure the floor stays high.
                    </li>
                  </ul>
                  <br />
                  So what other ideas are in the air?
                  <br />
                  <br />
                  <ul>
                    <li>Naked Metas First airdrop for owners.</li>
                    <li>
                      A Naked Metas mini animated movie series - Featuring a
                      deeper look into their past and present stories. (very keen)
                    </li>
                    <li>A Merch line exclusive to Naked Meta Owners.</li>
                    <li>
                      Creating a collection of Naked Meta Avatars for the
                      Metaverse. (in the works...)
                    </li>
                  </ul>
                  <br />
                  <br />
                  These ideas will be posted in our discord for your feedback and
                  we are open to hearing your creative thoughts!
                </h5>
              </div>
            </div>
            <hr />
          </div>
          <img src={map2} alt="" className="imgfloat2 d-none d-lg-block" />
          </div>
      </div>
    </>
  );
};

export default Roadmap;
