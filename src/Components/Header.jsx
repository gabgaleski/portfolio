import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import linkedin from '../img/linkedin.svg';
import github from '../img/githubHeader.svg';

function Header() {
    return ( 
        <header>
        <nav class="page-navegation">
            <Link to='/' >Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/skills' >Skills</Link>
            <Link to='/projects' >Projects</Link>
        </nav>
        <nav>
            <a href="https://www.linkedin.com/in/gabriel-galeski/" target="_blank" rel="noreferrer">
                <img src={ linkedin } class="linkedin-icon" alt="Linkedin icon"/>
            </a>
            <a href="https://github.com/gabgaleski" target="_blank" rel="noreferrer">
                <img src={github} alt="GitHub icon"/>
            </a>
        </nav>
    </header>
     );
}

export default Header;