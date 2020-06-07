import React from "react";
import { Dribbble, FacebookLetter, Github2, Twitter } from "../svg/Svgs.js";

const color = "#a2aed2";

const Footer = () => (
  <div className="container">
    <div className="top">flow ui</div>
    <div className="middle">
      <a href="/"> Terms of Service </a>
      <a href="/"> Privacy Policy </a>
      <a href="/"> Security </a>
      <a href="/"> Sitemap </a>
    </div>
    <div className="bottom">
      <div className="bottom-left">
        <p> English </p>
      </div>
      <div className="bottom-middle">
        <Twitter size="25px" color={color} />
        <Github2 size="20px" color={color} />
        <FacebookLetter size="20px" color={color} />
        <Dribbble size="20px" color={color} />
      </div>
      <div className="bottom-right">
        <p> &copy; 2020 flow ui. All rights reserved </p>
      </div>
    </div>
  </div>
);

export default Footer;
