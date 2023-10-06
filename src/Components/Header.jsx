import React from "react";
import profile from '../ProfileImage/gabriel.jpg'

function Header() {
    return ( 
          <header className="header-container">
            <div className="header-title">
              <img src={ profile } alt="profile" />
              <span className="name">Gabriel Galeski</span>
            </div>
            <nav class="page-navegation">
                <a href="#home" >Home</a>
                <a href='#about'>Sobre</a>
                <a href='#projects' >Projetos</a>
                <a href='#contact' >Contato</a>
            </nav>
          </header>
     );
}

export default Header;