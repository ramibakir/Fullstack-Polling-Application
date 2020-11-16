import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import ViewAllPolls from '../pages/ViewAllPolls';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CreatePoll from '../pages/CreatePoll';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/polls">
          <ViewAllPolls />
        </Route>
        <Route exact path="/createpoll">
          <CreatePoll />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
