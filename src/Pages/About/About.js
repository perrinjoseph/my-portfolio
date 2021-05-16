import React from "react";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../../Images/avatar.jpeg";
import zIndex from "@material-ui/core/styles/zIndex";
import years from "../../utils/yearsOfExperience";
import useStyles from "../../utils/useStyles";
import profilepic from "../../Images/profilepic.jpg";
import ScrollToTopOnMount from "../../Components/ScrollToTop/ScrollToTopOnMount";

function About() {
  const classes = useStyles();
  return (
    <main className="about">
      <ScrollToTopOnMount />
      <div className="about__header">
        <Avatar src={profilepic} className={classes.large} />
      </div>
      <header className="about__header">
        <p className="aboutMe">
          React developer <br></br>shaping modern web<br></br>
          applications
        </p>
        <p className="aboutMe--body">
          A front end developer based in Virginia, with {years} years of
          experience in developing and designing user-interface (UI) and web
          pages, working on user interface applications and professional web
          applications using modern development tools
        </p>
        <button className="btn--skills about__btn">Connect</button>
      </header>
    </main>
  );
}

export default About;
