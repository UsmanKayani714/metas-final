import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="container-fluid py-5">
          <div className="row text-center">
            <div className="col-md-3 text-left">
              <h1 className="color-purple">6</h1>
              <p className="color-green">Meta Stone Types</p>
            </div>
            <div className="col-md-3 text-left">
              <h1 className="color-purple">150+</h1>
              <p className="color-green">Unique Traits</p>
            </div>
            <div className="col-md-3 text-left">
              <h1 className="color-purple">ETH 0.07</h1>
              <p className="color-green">Public Mint Price</p>
            </div>
            <div className="col-md-3 text-left">
              <h1 className="color-purple">26,749,511</h1>
              <p className="color-green">Possible combinations</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-green py-5 p-50">
        <div className="container-fluid">
          <h1 className="display-3 fw-bold color-purple">
            Frequently Asked Questions
          </h1>
          <br />
          <div className="row">
            <div className=" col-lg-4 col-md-6 col-sm-12 shadow color-black">
              <div>
                <p className="f-20">
                  How much does a Naked Meta NFT cost to mint?
                </p>
                <h3>The Public Mint price is 0.07 ETH + gas fee.</h3>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12 shadow color-black">
              <div>
                <p className="f-20">When is the public minting date?</p>
                <h3>
                  Our public sale starts on December 10th, 2021 at 5:30pm EST.
                </h3>
              </div>
            </div>{" "}
            <div className=" col-lg-4 col-md-6 col-sm-12 shadow color-black">
              <div>
                <p className="f-20">Is there a whitelist sale?</p>
                <h3>
                  {" "}
                  1 day prior to the Public Sale on December 9th, 2021 at 4pm
                  EST there will be a Whitelist members sale. This will run for
                  a full 24 hours finishing at 4pm December 10th to make it easy
                  for gas prices and allowing plenty of time.
                </h3>
                <small>
                  Please join our Discord to learn how you can join the
                  Whitelist. Spots in the Whitelist are limited so get in Quick!
                </small>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12 shadow color-black">
              <div>
                <p className="f-20">Where can I view my Naked Metas?</p>
                <h3>
                  {" "}
                  Once you have finished minting a Naked Meta, you will be able
                  to see it by connecting your crypto wallet to OpenSea. Please
                  connect your wallet to OpenSea prior to minting.
                </h3>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12 shadow color-black">
              <div>
                <p className="f-20">How do I mint a Naked Meta?</p>
                <h3>
                  This is what you’ll need, to be able to connect your wallet
                  and mint an NFT
                </h3>
                <ul>
                  <li>
                    Create an account with Binance (exchange) and on Metamask
                    (wallet).
                  </li>
                  <li>
                    Buy ETH on Binance and send the ETH to your Metamask ETH
                    address.
                  </li>
                  <li>
                    Once Metamask has received the ETH you can connect your
                    Metamask wallet to Opensea to set up a profile for the NFT
                    marketplace.
                  </li>
                  <li>
                    Also, you can now connect your wallet to our website ready
                    to mint on the Naked Metas launch date.
                  </li>
                </ul>
                <h3>
                  If you are still having trouble: use Google search, Youtube is
                  always a massive help, or reach out in our Discord Server!
                </h3>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12 shadow color-black">
              <div>
                <p className="f-20">
                  I have a different question, where can I reach the support
                  team?{" "}
                </p>
                <h3>
                  The easiest and fastest way would be to open a support ticket
                  in our Discord Channel or ask it to everyone in our MetaHub
                  general chat.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
