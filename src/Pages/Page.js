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
        </>
     );
}

export default Page;