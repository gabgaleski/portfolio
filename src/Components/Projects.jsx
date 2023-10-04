import React from "react";
import { projects } from "../utils/projectData";
import { FaLaptopCode } from "react-icons/fa";

function Projects() {

    const clickBtn = (link) => {
        return () => {
            window.open(link, "_blank");
        }
    }

    return ( 
        <section id="projects" className="projects-section">
            <h2> <FaLaptopCode /> Principais Projetos</h2>
            <p>Alguns dos projetos que realizei ou participei do time de desenvolvimento. Todos estao presentes no meu <strong><a className="gh-link" href="https://github.com/gabgaleski" target="_blank" rel="noreferrer">Github</a></strong></p>
            <div className="allProjects">
                {projects.map((project) => {
                    return (
                    <div className="project" >
                        <div className="div-img">
                           <img src={project.image} alt="im" /> 
                        </div>
                        <div className="proj-infos">
                        <h5 className="proj-title">{project.name}</h5>
                        <p className="description">{project.description}</p>
                        <button onClick={clickBtn(project.link)}><span>Saber mais</span></button>
                        </div>
                    </div>
                )
                })}
                <p>Confira outros projetos no meu <a className="gh-link" href="https://github.com/gabgaleski" target="_blank" rel="noreferrer">Github</a></p>
            </div>
        </section>
    );
}

export default Projects;