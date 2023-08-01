import React from "react";
import linkedin from '../img/linkedin.svg';
import github from '../img/githubHeader.svg';

function Header() {
    return ( 
        <div className="header-section" >
          <header>
            <nav class="page-navegation">
                <a href="#home" >Home</a>
                <a href='#about'>About</a>
                <a href='#skills' >Skills</a>
                <a href='#proj' >Projects</a>
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
    </div>
     );
}

export default Header;