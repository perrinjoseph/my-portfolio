import React from "react";
import logo from "../../Images/logo.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import toggleNav from "../../Redux/actions";

function Nav({ className, type }) {
  const dispatch = useDispatch();

  const handelClick = (e) => {
    dispatch(toggleNav());
  };

  return (
    <nav className={className ? className : "nav"}>
      <ul className={className ? className + "--menu" : "nav__menu"}>
        {className ? (
          "Portfolio"
        ) : (
          <NavLink className="logo-font" to="/">
            <li className="nav__left">
              <img className="logo" src={logo} alt="Logo"></img>
              <span className="nav__logo__text">
                <b>
                  <b>Portfolio</b>
                </b>
              </span>
            </li>
          </NavLink>
        )}
        <div
          className={className ? className + "--items" : "nav__items hidden"}
        >
          <NavLink className="links" to="/">
            <li
              className={
                className
                  ? className + "--item nav__item nav__item--home"
                  : `nav__item nav__item--home `
              }
            >
              Home
            </li>
          </NavLink>
          <NavLink className="links" to="/projects">
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
                  : `nav__item nav__item--about `
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
        {className ? (
          ""
        ) : (
          <div className="hamburger-menu" onClick={handelClick}>
            <figure className="hamburger__line"></figure>
            <figure className="hamburger__line"></figure>
            <figure className="hamburger__line"></figure>
          </div>
        )}
        {className ? (
          ""
        ) : (
          <NavLink className="btn--contact links-custom hidden" to="/contact">
            Contact
          </NavLink>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
