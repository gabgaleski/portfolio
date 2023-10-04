import React from "react";
import homeImage from '../ProfileImage/home-image2.png'

function Header() {
    return ( 
          <header className="header-container">
            <div className="header-title">
              <img src={ homeImage } alt="profile" />
              <span>Gabriel Galeski</span>
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