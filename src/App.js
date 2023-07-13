import React from 'react'
import Page from './Pages/Page'
import ProjectId from './Components/ProjectId'
import { Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Page} />
      <Route exact path='/:id' component={ProjectId} />
    </Switch>
  );
}

export default App;
