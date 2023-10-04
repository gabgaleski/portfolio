import React from 'react';
import Header from '../Components/Header';
import Home from '../Components/Home';
import Footer from '../Components/Footer';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

function Page() {
    return ( 
      <>
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </>
     );
}

export default Page;