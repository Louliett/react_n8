import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';
import { ErrorContainer } from './common/ErrorContainer';
import { Admin } from './admin/AdminRouter';
import { Client } from './client/ClientRouter';

export function App() {
  
  return (
      <Switch>
        <Route path='/admin' component={Admin} />
        <Route exact path='/' component={Client} />
        <Route component={ErrorContainer} />
      </Switch>
  );
}

