import React from "react";
import { Twitter, Github2, FacebookLetter, Dribbble, Play } from "../svg/Svgs";

const color = "#a2aed2";
const SecondFooter = () => (
  <div className="second-footer-container">
    <div className="section-1">
      <p> flow ui </p>
    </div>
    <div className="section-2">
      <div className="section-2-left">
        <div className="column-1">
          <a href="/" className="title">
            about
          </a>
          <a href="/">About</a>
          <a href="/">Submit an issue</a>
          <a href="/">Github Repo</a>
          <a href="/">Slack</a>
        </div>
        <div className="column-2">
          <a href="/" className="title">
            getting started
          </a>
          <a href="/">Introduction</a>
          <a href="/">Documentation</a>
          <a href="/">Usage</a>
          <a href="/">Globals</a>
          <a href="/">Elements</a>
          <a href="/">Collections</a>
          <a href="/">Themes</a>
        </div>
      </div>
      <div className="section-2-right">
        <div className="column-3">
          <a href="/" className="title">
            resources
          </a>
          <a href="/">API</a>
          <a href="/">Form Validations Product</a>
          <a href="/">Visibility</a>
          <a href="/">Accessibility</a>
          <a href="/">Community</a>
          <a href="/">Design Defined</a>
          <a href="/">Marketplace</a>
        </div>
        <div className="column-4">
          <a href="/" className="title">
            social media
          </a>
          <p>
            Follow us on social media to find out the latest updates on our
            progress
          </p>
          <div className="social-icons">
            <a href="/">
              <Twitter size="25px" color={color} />
            </a>
            <a href="/">
              <Github2 size="20px" color={color} />
            </a>
            <a href="/">
              <FacebookLetter size="20px" color={color} />
            </a>
            <a href="/">
              <Dribbble size="20px" color={color} />
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className="section-3">
      <p> &copy; 2020 flow ui. All rights reserved </p>
      <div className="col-2">
        <a href="/"> Terms of Service </a>
        <a href="/"> Privacy Policy </a>
        <a href="/"> Security </a>
        <a href="/"> Sitemap </a>
      </div>
      <div className="col-3">
        <p> English </p>
        <Play color={color} size="10px" />
      </div>
    </div>
  </div>
);

export default SecondFooter;
