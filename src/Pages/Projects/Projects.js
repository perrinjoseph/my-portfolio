import React from "react";
import Project from "../../Sections/Project/Project";
import clara from "../../Images/claraproject.webp";
import jreport from "../../Images/jreport.png";
import optima from "../../Images/Kelton Optima.png";
import ScrollToTopOnMount from "../../Components/ScrollToTop/ScrollToTopOnMount";


function Projects() {
  return (
    <main className="projects">
      <h1 className="trusted-clients__header">Projects</h1>
      <Project
        side={"right"}
        heading={"Clarabridge Engage"}
        bio={"Conversation   analytics   and   engagement platform."}
        image={clara}
        path={"clarabridge"}
      />
      <Project
        heading={"JReport"}
        bio={
          "Lets users design, embed, and scale sophisticated operational reports"
        }
        image={jreport}
        path={"jreport"}
      />
      <Project
        side={"right"}
        heading={"OPtima"}
        bio={
          "A digital enterprise platform generates rapid insights for effective management and monitoring of operation and resources."
        }
        image={optima}
        path={"optima"}
      />
      
    </main>
  );
}

export default Projects;
