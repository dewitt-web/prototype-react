import React from 'react';
import './App.css';
import TodoPage from './pages/TodoPage/TodoPage'
import HomePage from './pages/HomePage/HomePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/todos">Todos</Link>
    </nav>
    <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route path="/todos">
        <TodoPage/>
      </Route>
    </Switch>
  </Router>
);

export default App;
