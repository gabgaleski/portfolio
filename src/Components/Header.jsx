import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return ( 
        <div className="header-section" >
          <header>
          <nav>
            </nav>
            <nav class="page-navegation">
                <Link to="/" >Home</Link>
                <Link to='/about'>Sobre</Link>
                <Link to='/projects' >Projetos</Link>
                <Link to='/skills' >Habilidades</Link>
            </nav>
          </header>
    </div>
     );
}

export default Header;