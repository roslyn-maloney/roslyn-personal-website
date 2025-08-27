import React, { forwardRef } from "react";
import DividerOne from "../../Assets/Divider1.svg";
import { Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { projects } from "../../Data";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const nav = useNavigate();

  return (
    <div ref={ref}>
      <Image className="divider-one" src={DividerOne} alt="DividerOne" />
      <h2 className="d-flex justify-content-center project-title">Projects</h2>
      <div className="d-flex justify-content-center flex-row project-cards">
        {projects.map((project) => (
          <Button
            key={project._id}
            onClick={() => nav(`/Project/${project._id}`)}
            className={`project-button ${project._id}`}
          >
            {project.name}
          </Button>
        ))}
      </div>
    </div>
  );
});

export default Projects;
