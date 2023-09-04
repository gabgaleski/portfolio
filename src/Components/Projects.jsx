import React from "react";
import { projects } from "../utils/projectData";

function Projects() {
    return ( 
        <section id="proj" className="projects-section">
            <h2>Principais Projetos</h2>
            <div className="allProjects">
                {projects.map((project) => {
                    return (
                    <div className="project" >
                        <a target="_blank" href={ project.link } rel="noreferrer">
                            <img className="proj-img" src={project.image} alt="imagem do projeto" />
                        </a>
                        <p>
                        {project.tools.map((tool) => <span>{`${tool}`}</span>)}
                        </p>
                        <h5>{project.name}</h5>
                        <p>{project.description}</p>
                    </div>
                )
                })}
            </div>
        </section>
    );
}

export default Projects;