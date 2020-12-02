import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeContainer } from './components/containers/HomeContainer';
import { ErrorContainer } from '../common/ErrorContainer';

export function Client() {
    return (
        <div>
            <Switch>
                <Route path='/' component={HomeContainer} />
                <Route component={ErrorContainer} />
            </Switch>            
        </div>
    );
}