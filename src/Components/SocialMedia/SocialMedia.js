import React from "react";

function SocialMedia({ icon, type, link }) {
  return (
    <a
      without
      rel="noreferrer"
      target="_blank"
      className="social-media"
      href={link}
    >
      {type ? (
        <object type="image/svg+xml" data={icon} title="Social Media"></object>
      ) : (
        <img className="smi" src={icon} alt="Social Media"></img>
      )}
    </a>
  );
}

export default SocialMedia;
