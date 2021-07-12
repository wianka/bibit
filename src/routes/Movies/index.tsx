import React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';

import List from './Container';
import Details from './Details';

function Index() {
  const match = useRouteMatch();
  const { path } = match;

  return (
    <Switch>
      <Route exact path={path}>
        <List />
      </Route> 
      <Route exact path={`${path}/detail/:id`}>
        <Details />
      </Route> 
    </Switch>
  )
}

export default Index
