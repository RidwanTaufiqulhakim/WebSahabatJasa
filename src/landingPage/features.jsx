import React from 'react';
import './Features.css';
import TukangImg from "../assets/Tukang.png"
import Mbak2 from "../assets/Mbak2Cantik.png"
import Mas2 from "../assets/Mas2Ganteng.png"

const Features = () => {
  return (
    <div className="keunggulan-container">
      <h1>Keunggulan Sahabat Jasa</h1>
      <div className="keunggulan-item">
        <div className="image-container">
          <img src= {TukangImg}  alt="Worker 1" />
        </div>
        <div className="text-container">
          <h2>Pelayanan Sempurna</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>

      <div className="keunggulan-item1">
        <div className="image-container">
          <img src={Mbak2} alt="Worker 2" />
        </div>
        <div className="text-container2">
          <h2>Cepat</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>

      <div className="keunggulan-item">
        <div className="image-container">
          <img src={Mas2} alt="Worker 3" />
        </div>
        <div className="text-container">
          <h2>Aman dan Nyaman</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
