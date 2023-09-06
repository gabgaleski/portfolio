import React from 'react';
import Header from "../Components/Header";
import ProjectsComponent from "../Components/Projects";
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';

function Projects() {
    return ( 
      <>
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ProjectsComponent />
          <Footer />
        </motion.div> 
      </>
     );
}

export default Projects;