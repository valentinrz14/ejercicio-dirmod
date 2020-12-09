import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "../assets/css/Template.scss";

const FooterLayout = () => {
  return (
    <footer className="ec-footer">
      <div className="ec-footer-container">
        <div className="ec-footer-left-col">
          <p className="ec-footer-left-col__logo">Brand Logo</p>
          <div className="ec-footer-left-col__social-media">
            <a
              className="ec-footer-left-col__social-media-link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="nooper noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" color="#fff" />
            </a>
            <a
              className="ec-footer-left-col__social-media-link"
              href="https://twitter.com/home"
              target="_blank"
              rel="nooper noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" color="#fff" />
            </a>
            <a
              className="ec-footer-left-col__social-media-link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="nooper noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" color="#fff" />
            </a>
            <a
              className="ec-footer-left-col__social-media-link"
              href="https://www.linkedin.com/in/valentinrz14"
              target="_blank"
              rel="nooper noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" color="#fff" />
            </a>
          </div>
          <p className="ec-footer-left-col__copyright">
            © 2020 Created By Valentinrz All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
