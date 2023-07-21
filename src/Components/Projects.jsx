import React from "react";
import { projects } from "../utils/projectData";

function Projects() {
    return ( 
        <section className="projects-section">
            <h2>Projects</h2>
            <div className="allProjects">
                {projects.map((project) => {
                    return (
                    <div>
                        <img src={project.image} alt="imagem do projeto" />
                        <p>{project.name}</p>
                        <a href={project.link} target='_blank' rel="noreferrer" >Repositorio</a>
                    </div>
                )
                })}
            </div>
        </section>
    );
}

export default Projects;