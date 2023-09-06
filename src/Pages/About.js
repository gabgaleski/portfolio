import React from 'react';
import Header from "../Components/Header";
import AboutComponent from "../Components/About";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";


function About() {
    return ( 
      <>
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <AboutComponent />
          <Footer />
        </motion.div> 
      </>
    );
}

export default About;