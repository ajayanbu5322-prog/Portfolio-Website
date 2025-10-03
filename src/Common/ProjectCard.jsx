import React from "react";

function ProjectCard({src, h3, p}) {
  return (
    <a href="" target="-blank">
      <img className="hover" src={src} alt={`${h3}`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
