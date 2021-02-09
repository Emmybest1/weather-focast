import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/home.component';
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
        </Switch>
      </Router>
    </>
  );
};

export default App;
