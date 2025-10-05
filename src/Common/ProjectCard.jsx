import React from "react";

function ProjectCard({src, h3, p, Link}) {
  return (
    <a href={Link} target="-blank">
      <img className="hover" src={src} alt={`${h3}`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
