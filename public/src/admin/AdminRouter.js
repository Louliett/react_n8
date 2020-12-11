import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginContainer } from './components/login/LoginContainer';
import { ForgotPasswordContainer } from './components/forgot_password/ForgotPasswordContainer';
import { ResetPasswordContainer } from './components/forgot_password/ResetPasswordContainer';
import { HomeContainer } from './components/home/HomeContainer';
import { ProductsContainer } from './components/products/ProductsContainer';
import { CreateProductContainer } from './components/create_product/CreateProductContainer';
import { ClassificationsContainer } from './components/classifications/ClassificationsContainer';
import { CreateClassContainer } from './components/create_classification/CreateClassContainer';
import { UsersContainer } from './components/users/UsersContainer';
import { PagesContainer } from './components/pages/PagesContainer';
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
          <ProtectedRoute exact path="/admin/products" component={ProductsContainer} />
          <ProtectedRoute exact path="/admin/create-product" component={CreateProductContainer} />
          <ProtectedRoute exact path="/admin/classifications" component={ClassificationsContainer} />
          <ProtectedRoute exact path="/admin/create-classification" component={CreateClassContainer} />
          <ProtectedRoute exact path="/admin/users" component={UsersContainer} />
          <ProtectedRoute exact path="/admin/pages" component={PagesContainer} />
          <Route component={ErrorContainer} />
        </Switch>
      </div>
    );
}