import React from "react";
import logo from "../../Images/logo.png";
import { Link, NavLink } from "react-router-dom";

function Nav({ className }) {
  return (
    <nav className={className ? className : "nav"}>
      <ul className={className ? className + "--menu" : "nav__menu"}>
        {className ? (
          "Portfolio"
        ) : (
          <li className="nav__left">
            <img className="logo" src={logo}></img>
            <span className="nav__logo__text">
              <b>
                <b>Portfolio</b>
              </b>
            </span>
          </li>
        )}
        <div className={className ? className + "--items" : "nav__items"}>
          <NavLink className="links" to="/">
            <li
              className={
                className
                  ? className + "--item nav__item nav__item--home"
                  : `nav__item nav__item--home`
              }
            >
              Home
            </li>
          </NavLink>
          <NavLink className="links" to="/">
            <li
              className={
                className
                  ? className + "--item nav__item nav__item--projects"
                  : `nav__item nav__item--projects`
              }
            >
              Projects
            </li>
          </NavLink>
          <NavLink className="links" to="/about">
            <li
              className={
                className
                  ? className + "--item nav__item nav__item--about"
                  : `nav__item nav__item--about`
              }
            >
              About
            </li>
          </NavLink>
          <NavLink className="links" to="/skills">
            <li
              className={
                className
                  ? className + "--item nav__item nav__item--skills"
                  : `nav__item nav__item--skills`
              }
            >
              Skills
            </li>
          </NavLink>
        </div>
        {className ? "" : <button className="btn--contact">Contact</button>}
      </ul>
    </nav>
  );
}

export default Nav;
