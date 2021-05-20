import React from "react";
import { Link, NavLink } from "react-router-dom";
import Arrow from '@material-ui/icons/ArrowRightAlt';
function Project({ side, heading, bio, path, image }) {
  switch (side) {
    case "right":
      return (
        <section className="project">
          <aside className="project__right">
            <div className="project__headings">
              <h1 className="project__header">{heading}</h1>
              <p className="project__bio">{bio}</p>
              <NavLink className="links path" to={`/${path}`}>View More<Arrow/></NavLink>
            </div>
          </aside>
          <aside className="project__left">
            <img className="project__image" src={image}></img>
          </aside>
        </section>
      );
    default:
      return (
        <section className="project">
          <aside className="project__right">
            <img className="project__image" src={image}></img>
          </aside>
          <aside className="project__left">
            <div className="project__headings">
              <h1 className="project__header">{heading}</h1>
              <p className="project__bio">{bio}</p>
              <NavLink className="links path"to={`/${path}`}> View More<Arrow/></NavLink>
            </div>
          </aside>
        </section>
      );
  }
}

export default Project;
