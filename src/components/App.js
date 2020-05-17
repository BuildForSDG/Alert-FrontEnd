import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import PageNotFound from './PageNotFound';
const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
