import React from "react";
import "./giveaway.css";
import giveaway from "../assets/giveaway.webp";

const Giveaway = () => {
    return (
        <div>
            <div className="container-fluid p0">
                <div className="bgImage flex-box">
                    <div>
                        <img className="image-style img-fluid" src={giveaway} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Giveaway;
