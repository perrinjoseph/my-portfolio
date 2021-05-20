import React from "react";
import ScrollToTopOnMount from "../../Components/ScrollToTop/ScrollToTopOnMount";

function ProjectDetails({ image, header, description }) {
  return (
    <div className="project-details">
      <ScrollToTopOnMount />
      <img className="project-details__image" src={image}></img>
      <div className="project-details__info">
        <h1 className="project-details__header">{header}</h1>
        <p className="project-details__description">{description}</p>
      </div>
    </div>
  );
}

export default ProjectDetails;
