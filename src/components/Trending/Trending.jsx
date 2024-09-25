import React from "react";
import "./Trending.css";
import { FaArrowRight } from "react-icons/fa6";
import { IoTrendingUp } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
const Trending = () => {
  return (
    <div className="trending">
      <div className="first">
        <h1>Trending Tours</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui
          consectetur dolor eius magni, nostrum possimus doloremque, culpa
          delectus magnam eveniet. Nemo, perspiciatis quos. Porro.
        </p>
        <div className="btn2">
          View All Tours
          <FaArrowRight />
        </div>
      </div>
      <div className="second">
        <div className="box">
          <div className="bgimg"></div>
          <div className="tname">
            <p className="alka">Beachfront</p>
            <p>
              $99
              <span>per day</span>
            </p>
          </div>
          <h1>A Trip to the Bahamas and the Carribean Ocean</h1>
          <div className="three">
            <span className="rrrr">
              <IoTrendingUp />
              <p>TRENDING</p>
            </span>
            <span className="rrrr">
              <FiClock />
              <p>7 DAYS TOUR</p>
            </span>
            <span className="rrrr">
              <IoLocationOutline />
              <p>AFRICA</p>
            </span>
          </div>
          <div className="booknowbtn">Book Now</div>
        </div>
      </div>
      <div className="third">
        <div className="bgimg">

        </div>
        <div className="tname">
          <p className="alka">Cruise</p>
          <p>
            $199
            <span>per day</span>
          </p>
        </div>
        <h1>Cruise to the Mariana Trench and the Phillipines</h1>
        <div className="three">
          <span className="rrrr">
            <IoTrendingUp />
            <p>TRENDING</p>
          </span>
          <span className="rrrr">
            <FiClock />
            <p>15 DAYS TOUR</p>
          </span>
          <span className="rrrr">
            <IoLocationOutline />
            <p>AUSTRALIA</p>
          </span>
        </div>
        <div className="booknowbtn">Book Now</div>
      </div>
    </div>
  );
};

export default Trending;
