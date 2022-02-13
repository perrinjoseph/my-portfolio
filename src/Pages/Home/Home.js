import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import ScrollToTopOnMount from "../../Components/ScrollToTop/ScrollToTopOnMount";
import About from "../About/About";
import Clients from "../Clients/Clients";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import $ from "jquery";

import landingimg from "./OBJECTS.svg";

function Home() {
  const [skillsHight, setSkillsHight] = useState(0);
  const [projecthight, setProjectHight] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [init, setInit] = useState(false);

  const scrollToLocation = (scrollHight) => {
    window.scroll({
      top: scrollHight,
      left: 0,
      behavior: "smooth",
    });
  };
  // contact-form

  const getScroll = () => {
    const hightProjects = $(".trusted-clients__header").offset();

    const hight = $(".skills").offset();
    setSkillsHight(hight.top);
    setProjectHight(hightProjects.top);
  };
  useEffect(() => {
    if (init === false) {
      const hight2 = $(".trusted-clients__header").offset();
      const hight = $(".skills").offset();
      setSkillsHight(hight.top);
      setProjectHight(hight2.top);
    }
    window.addEventListener("resize", getScroll);
    return () => window.removeEventListener("resize", getScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="home">
      <ScrollToTopOnMount />
      <div className="home__landing">
        <div>
          <div className="home__landing__typography">
            <span className="typist">Hi, I'm Perrin</span>
            <div className="typist">
              <span className="I">I</span>
              <Typewriter
                options={{
                  wrapperClassName: "Typewriter__wrapper",
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 100,
                  pauseFor: 2300,
                  strings: ["Design", "Develop", "Improve", "Test"],
                }}
              />
            </div>
            <span className="typist">React Applications</span>
            <div className="home__landing__btns">
              <button
                onClick={() => scrollToLocation(projecthight)}
                className="btn--projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToLocation(skillsHight)}
                className="btn--skills"
              >
                Skills
              </button>
            </div>
          </div>
        </div>
        <object
          title="Development Environment"
          type="image/svg+xml"
          data={landingimg}
        ></object>
      </div>
      <About />
      <Skills />
      <Clients />
      <Projects />
      <Experience />
    </main>
  );
}

export default Home;
