import React, { useEffect, useState } from "react";
import front from "../../Images/front.png";
import back from "../../Images/back.png";
import mid from "../../Images/mid.png";
import SkillTag from "../../Components/SkillTag/SkillTag";
import ScrollToTopOnMount from "../../Components/ScrollToTop/ScrollToTopOnMount";

const skills = [
  "Java",
  "JavaScript",
  "TypeScript",
  "PHP",
  "Swift",
  "React",
  "Bootstrap",
  "CSS3",
  "Nodejs",
  "HTML5",
  "ES6",
  "JSON",
  "jQuery",
  "Webpack",
  "MySQL",
  "MongoDB",
  "FireBase/Firestore",
  "VSC",
  "Sublime",
  "GIT",
  "SVN",
  "JIRA",
  "Postman",
  "Jasmin",
  "Enzyme",
  "Figma",
  "Unit Testing",
  "Pusher",
  "Nextjs",
  "GraphQL",
  "Agile",
  "Babel",
];

function Skills() {
  const [offsetY, setOffsetY] = useState(0);
  const handelScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);
  return (
    <main className="skills">
      <ScrollToTopOnMount />
      <span className="about__header skills__info">
        <p className="skills__header">
          Cutting edge tech,<br></br>with a wide range of skills
        </p>
        <p className="allTags">
          {skills.map((el, index) => (
            <SkillTag key={index} skill={el} />
          ))}
        </p>
      </span>
      <img
        style={{ transform: `translateY(${offsetY * 0.15}px)` }}
        className="skills__bg"
        src={back}
        alt="Skill"
      ></img>

      <img
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
        className="skills__mid"
        src={mid}
        alt="Skill"
      ></img>

      <img
        style={{ transform: `translateY(${offsetY * 0.07}px)` }}
        className="skills__front"
        src={front}
        alt="Skill"
      ></img>
    </main>
  );
}

export default Skills;
