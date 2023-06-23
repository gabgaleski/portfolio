import React from 'react'
import Home from './Pages/Home';
import { Route, Switch } from 'react-router-dom'
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import ProjectId from './Pages/ProjectId';
import './App.css'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/skills' component={Skills} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/projects/:id' component={ProjectId} />
    </Switch>
  );
}

export default App;
