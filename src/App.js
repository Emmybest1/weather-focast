import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/home/home.component';
import Fallback from './components/pages/fallback/fallback.component';
import './app.style.scss';

const App = () => {
  return (
    <>
      <a href="#main" className="content-skipper">
        Skip to main content
      </a>

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/weather/:cityId" component={Home} />
          <Route exact path="/fallback" component={Fallback} />
          <Route component={Fallback} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
