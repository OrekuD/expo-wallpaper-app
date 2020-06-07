import React from "react";
import { Dribbble, FacebookLetter, Github2, Twitter } from "../svg/Svgs.js";

const color = "#606a89";

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
      <div className="bottom-left"> English </div>
      <div className="bottom-middle">
        <Twitter size="30px" color={color} />
        <Github2 size="25px" color={color} />
        <FacebookLetter size="24px" color={color} />
        <Dribbble size="25px" color={color} />
      </div>
      <div className="bottom-right">
        &copy; 2020 flow ui. All rights reserved
      </div>
    </div>
  </div>
);

export default Footer;
