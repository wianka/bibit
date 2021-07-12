import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Layouts from '../components/Layouts';
import Movies from './Movies';

function Routes() {
  return (
    <BrowserRouter>
    <Layouts>
      <Switch>
        <Route exact path="/movies" component={Movies} />
      </Switch>
    </Layouts>
    </BrowserRouter>
  )
}

export default Routes;