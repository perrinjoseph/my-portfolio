import React from "react";

function SocialMedia({ icon, type, link }) {
  return (
    <a target="_blank" className="social-media" href={link}>
      {type ? (
        <object type="image/svg+xml" data={icon}></object>
      ) : (
        <img className="smi" src={icon}></img>
      )}
    </a>
  );
}

export default SocialMedia;
