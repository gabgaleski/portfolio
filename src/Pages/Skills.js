import React from 'react';
import Header from "../Components/Header";
import SkillsComponent from "../Components/Skills";
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';

function Skills() {
    return ( 
      <>
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <SkillsComponent />
          <Footer />
        </motion.div> 
      </>
     );
}

export default Skills;