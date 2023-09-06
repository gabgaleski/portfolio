import React from 'react';
import Header from '../Components/Header';
import Home from '../Components/Home';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';

function Page() {
    return ( 
      <>
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Home />
          <Footer />
        </motion.div>
      </>
     );
}

export default Page;