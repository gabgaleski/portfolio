import React from 'react'
import Home from './Pages/Home'
import { Route, Switch, useLocation } from 'react-router-dom'
import './App.css'
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait' >
      <Switch location={ location } key={ location.pathname } >
        <Route exact path='/' component={ Home } />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
