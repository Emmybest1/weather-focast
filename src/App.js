import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/home.component';
import './app.style.scss';

const App = () => {
  return (
    <div>
      <a href="#main" className="content-skipper">
        Skip to main content
      </a>

      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/weather/:cityId" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
