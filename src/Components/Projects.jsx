import React from "react";
import { projects } from "../utils/projectData";
import icon from '../ProfileImage/icon.svg';

function Projects() {
    const img = <img className="icon-img" src={icon} alt="icon" />
    return ( 
        <section id="proj" className="projects-section">
            <h2>Projects</h2>
            <div className="allProjects">
                {projects.map((project) => {
                    return (
                    <div className="project" >
                        <img className="proj-img" src={project.image} alt="imagem do projeto" />
                        <p>
                        {project.tools.map((tool) => <span>{`${tool}`}</span>)}
                        </p>
                        <h5>{project.name}</h5>
                        <a href={project.link} target='_blank' rel="noreferrer" >{img}</a>
                        <span className="span-rep">Github Rep</span>
                    </div>
                )
                })}
            </div>
        </section>
    );
}

export default Projects;