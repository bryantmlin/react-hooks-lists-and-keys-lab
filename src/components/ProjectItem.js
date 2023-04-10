import React from "react";
//import {user, projects} from "data/user";

// function techItem(props) {
//   return <span>{props.projects.technologies}</span>
// }

// const techElements = projects.map((project) => {
//   return <techItem key={project.id} project={project.name} />
// })

function ProjectItem({ name, about, technologies }) {
  const techList = technologies.map((tech) => (
    <span key={tech}>{tech}</span>
  ))

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techList}</div>
    </div>
  );
}

export default ProjectItem;
