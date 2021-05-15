import React from "react";
import logo from "../../Images/logo.png";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__left">
          <img className="logo" src={logo}></img>
          <span className="nav__logo__text">
            My
            <b>
              <b>Portfolio</b>
            </b>
          </span>
        </li>
        <div className="nav__items">
          <li className="nav__item--home">Home</li>
          <li className="nav__item--projects">Projects</li>
          <li className="nav__item--story">Story</li>
          <li className="nav__item--skills">Skills</li>
        </div>
        <button className="btn--contact">Contact</button>
      </ul>
    </nav>
  );
}

export default Nav;
