import React from 'react'
import Home from './Pages/Home'
import { Route, Switch, useLocation } from 'react-router-dom'
import './App.css'
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait' >
      <Switch location={ location } key={ location.pathname } >
        <Route exact path='/' component={ Home } />
        <Route exact path='/about' component={ About } />
        <Route exact path='/skills' component={ Skills } />
        <Route exact path='/projects' component={ Projects } />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
