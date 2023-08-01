import React from 'react'
import Page from './Pages/Page'
import { Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Page} />
    </Switch>
  );
}

export default App;
