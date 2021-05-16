import React from "react";
import Nav from "../../Components/Nav/Nav";
import logo from "../../Images/logo.png";
import dribble from "../../Images/dribbble-icon-1.svg";
import SocialMedia from "../../Components/SocialMedia/SocialMedia";
import insta from "../../Images/instagram.png";
import github from "../../Images/github.png";
import ContactForm from "../../Components/ContactForm/ContactForm";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__columns">
          <div className="footer__left">
            <Nav className={"footer__nav"} />
            <div>
              <p>
                <button className="btn--contact footer-btn">
                  Get in touch
                </button>
                <br></br>
              </p>
            </div>
          </div>

          <div className="footer__right">
            <div className="footer__right__top">
              <img className="footer__logo" src={logo}></img>
              <span className="footer__nav--menu">Portfolio</span>
            </div>
            <p className="footer__right__body">
              Building web applications, helping clients succeed, and improving
              existing systems, is my passion. Tell me about your product or
              idea, and lets make it happen.
            </p>
            <ContactForm/>
            <div className="footer__social-media">
              <SocialMedia
                link={"https://dribbble.com/perrinjoseph"}
                icon={dribble}
              />
              <SocialMedia
                link={"https://www.instagram.com/perrinjoseph/"}
                icon={insta}
              />
              <SocialMedia
                link={"https://github.com/perrinjoseph"}
                icon={github}
              />
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
