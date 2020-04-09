import React from "react";
import "./Banner.css";
import img from "../../images/Mask Group 1.png";
import Nav from "../Nav/Nav";

const Banner = () => {
  return (
    <div>
      <div className="banner-area">
        <Nav></Nav>
        <div className="row">
          <div className="col-md-5">
            <div className="banner-left">
              <h1>Your New Smile Start Here</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                praesentium iste deleniti atque aliquam! Sunt doloribus mollitia
                vitae.
              </p>
              <a href="/appointment" className="my-btn">
                GET APPOINTMENT
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <div className="banner-img">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
