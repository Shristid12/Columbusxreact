import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';

import HomeRoutes from './routes/HomeRoutes';
import AuthRoutes from './routes/authroutes';
import Welcome from './Containers/home';
const App = () => (
  <Router>
    <Switch>
      <Route path="/auth" component={AuthRoutes} />
      <Route path="/app" component={HomeRoutes} />
    </Switch>
  </Router>
);
export default App;
