import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Polls from '../pages/Polls';
import Home from '../pages/Home';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/polls">
          <Polls />
        </Route> */}
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
