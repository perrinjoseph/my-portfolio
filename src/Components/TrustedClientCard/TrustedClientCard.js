import React from "react";
import Avatar from "@material-ui/core/Avatar";
import useStyles from "../../utils/useStyles";

function TrustedClientCard({ avatar, name, occupation }) {
  const classes = useStyles();
  return (
    <article className="trusted-client-card">
      <Avatar src={avatar} className={classes.medium} />
      <p className="trusted-client-card__body">
        "Consequat nulla excepteur excepteur officia velit adipisicing sunt qui
        et aliquip dolore. Lorem non sunt do minim. Aliquip sunt consectetur
        pariatur et sint eu eiusmod ex eiusmod et voluptate excepteur id. Nulla"
      </p>
      <br></br>
      <div style={{display:"flex",flexDirection:"column",textAlign:"center"}}>
        <span className="trusted-client-card__name">{name}</span>
        <span className="trusted-client-card__occupation lighter-font ">
          {occupation}
        </span>
      </div>
    </article>
  );
}

export default TrustedClientCard;
