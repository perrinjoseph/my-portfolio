import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeNav } from "../../../Redux/actions";

function ResponsiveNav({ className }) {
  const dispatch = useDispatch();
  const data = useSelector((data) => data.toggleNav);
  const navTitles = ["Home", "Projects", "About", "Skills", "Contact"];
  return (
    <nav className={`responsive-nav ${data ? "openNav" : ""}`}>
      <div className="container">
        <ul className="responsive-nav__menu">
          <div
            onClick={(e) => {
              if (navTitles.includes(e.target.innerText)) {
                dispatch(closeNav());
              }
            }}
          >
            <NavLink className="links" to="/">
              <li className="nav__item nav__item--home responsive-nav__item">
                Home
              </li>
            </NavLink>
            <NavLink className="links" to="/">
              <li className="nav__item nav__item--projects responsive-nav__item">
                Projects
              </li>
            </NavLink>
            <NavLink className="links" to="/about">
              <li className="nav__item nav__item--about responsive-nav__item">
                About
              </li>
            </NavLink>
            <NavLink className="links" to="/skills">
              <li className="nav__item nav__item--skills responsive-nav__item">
                Skills
              </li>
            </NavLink>
          </div>
          {className ? (
            ""
          ) : (
            <NavLink
              className="btn--contact footer-btn links-custom "
              to="/contact"
            >
              Contact
            </NavLink>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default ResponsiveNav;
