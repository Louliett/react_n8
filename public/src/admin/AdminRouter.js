import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginContainer } from './components/login/LoginContainer';
import { ForgotPasswordContainer } from './components/forgot_password/ForgotPasswordContainer';
import { ResetPasswordContainer } from './components/forgot_password/ResetPasswordContainer';
import { HomeContainer } from './components/home/HomeContainer';
import { ErrorContainer } from '../common/ErrorContainer';
import { ProtectedRoute } from './ProtectedRoute';


export function Admin() {


    return (
      <div>
        <Switch>
          <ProtectedRoute exact path='/admin' component={LoginContainer} />
          <Route exact path='/admin/forgot-password' component={ForgotPasswordContainer} />
          <Route exact path='/admin/reset-password/:user_id' component={ResetPasswordContainer} />
          <ProtectedRoute exact path="/admin/home" component={HomeContainer} />
          <Route component={ErrorContainer} />
        </Switch>
      </div>
    );
}