import React from 'react';
import Header from '../Components/Header';
import Home from '../Components/Home';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';

function Page() {
    return ( 
        <>
          <Header />
          <Home />
          <About />
          <Skills />
          <Projects />
          <footer>
            <section>
                <a href='https://github.com/gabgaleski'>GitHub</a>
                <a href='https://www.linkedin.com/in/gabgaleski/'>Linkedin</a>
            </section>
            <p>Criação de Gabriel Galeski @2023 | Todos os direitos reservados.</p>
          </footer>
        </>
     );
}

export default Page;