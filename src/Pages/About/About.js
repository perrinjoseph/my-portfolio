import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../../Images/avatar.jpeg";
import zIndex from "@material-ui/core/styles/zIndex";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    position: "relative",
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: `30px`,
  },
  behind: {
    position: `absolute`,
    width: theme.spacing(20),
    height: theme.spacing(20),
    filter: `blur(20px)`,
    zIndex: `-1`,
    transform: "translate(24px, 10px)",
    opacity: "0.7",
  },
}));

function About() {
  const classes = useStyles();
  return (
    <main className="about">
      <div className="about__header">
        <Avatar src={avatar} className={classes.large} />
      </div>
      <header className="about__header">
        <p className="aboutMe">
          React developer shaping <br></br>modern front end Web<br></br>
          applications
        </p>
        <p className="aboutMe--body">
          A front end developer based in Virginia, with 6 years of experience in developing and
          designing  user-interface (UI) and web pages, working on user interface
          applications and professional web applications using modern front end
          development tools
        </p>
      <button className="btn--skills about__btn">Connect</button>
      </header>
    </main>
  );
}

export default About;
