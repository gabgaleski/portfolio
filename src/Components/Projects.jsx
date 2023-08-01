import React from "react";
import { projects } from "../utils/projectData";

function Projects() {
    return ( 
        <section id="proj" className="projects-section">
            <h2>Projects</h2>
            <div className="allProjects">
                {projects.map((project) => {
                    return (
                    <div className="project" >
                        <img src={project.image} alt="imagem do projeto" />
                        <p>
                        {project.tools.map((tool) => <span>{`${tool}`}</span>)}
                        </p>
                        <h5>{project.name}</h5>
                        <a href={project.link} target='_blank' rel="noreferrer" >Repositorio</a>
                    </div>
                )
                })}
            </div>
        </section>
    );
}

export default Projects;