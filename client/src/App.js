import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, TodoPage } from './components'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/"><HomePage /></Route>
      <Route path="/todos"><TodoPage /></Route>
    </Switch>
  </Router>
)

export default App
