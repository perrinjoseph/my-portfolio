import React from "react";

function ExperienceCard({ header, body }) {
  return (
    <article className="experience-card">
      <img src="" className="experience-card__logo"></img>
      <header className="experience-card__header">{header}</header>
      <main className="experience-card__main">
        <ul className="experience-card__items">
          <li>{body.first}</li>
          <li>{body.second}</li>
          <li>{body.third}</li>
        </ul>
      </main>
    </article>
  );
}

export default ExperienceCard;
