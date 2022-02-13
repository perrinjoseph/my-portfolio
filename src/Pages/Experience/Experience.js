import React from "react";
import years from "../../utils/yearsOfExperience";
import trophy from "../../Images/trophy.png";
import ExperienceCard from "../../Components/ExperienceCard/ExperienceCard";

function Experience() {
  return (
    <main className="experience">
      <div className="experience__left">
        <img className="trophy" src={trophy} alt="trophy"></img>
        <header className="experience__header">
          <span className="gold-theme">{years} </span>years of Expertise
        </header>
        <p className="experience__body">
          I can help you successfully take your business online by building the
          world's best experiences and bringing value to your team.
        </p>
      </div>
      <div className="experience__right">
        <div className="row">
          <ExperienceCard
            header={"User Interface Design"}
            body={{
              first: "Web UI Design",
              second: "Micro Interactions",
              third: "Animations",
            }}
          />
          <ExperienceCard
            header={"React Development"}
            body={{
              first: "Reuseable-components ",
              second: "Testing components",
              third: "Redux",
            }}
          />
        </div>
        <div className="row">
          <ExperienceCard
            header={"User Experience"}
            body={{
              first: "UX Enhancements",
              second: "UX Audit",
              third: "User Requirements",
            }}
          />
          <ExperienceCard
            header={"Agile Scrum"}
            body={{
              first: "Sprint Planning",
              second: "Daily Standups",
              third: "Sprint Retrospective",
            }}
          />
        </div>
      </div>
    </main>
  );
}

export default Experience;
