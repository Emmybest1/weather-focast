import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/home/home.component';
import Forecast from './components/pages/forecast/forecast.component';
import Fallback from './components/partials/fallback/fallback.component';
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
          <Route exact path="/adventures" component={null} />
          <Route exact path="/adventure" component={null} />
          <Route exact path="/disasters" component={null} />
          <Route exact path="/disaster" component={null} />
          <Route exact path="/forecast" component={Forecast} />
          <Route exact path="/forecast/:cityId" component={Forecast} />
          <Route exact path="/fallback" component={Fallback} />
          <Route component={Fallback} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
