import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Privacy from './Privacy';

import './App.css';

export default class App extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="about" component={About} />
            <Route path="privacy" component={Privacy} />
          </Switch>
        </div>
      </Router>
    );
  }
}
