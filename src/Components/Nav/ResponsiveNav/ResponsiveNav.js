import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function ResponsiveNav({ className }) {
  const data = useSelector((data) => data.toggleNav);

  return (
    <nav className={`responsive-nav ${data?"openNav":""}`}>
      <div className="container">
        <ul className="responsive-nav__menu">
          <div>
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
            <button className="btn--contact footer-btn">Contact</button>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default ResponsiveNav;
