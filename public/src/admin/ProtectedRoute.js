import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth.service'

export function ProtectedRoute({component: Component, path: Path}) {
    
    //Question to be answered: shout this function always return a Route that can have Redirect inside
    //Or is it ok to return just Redirect?

    if (Path === '/admin') {
        if(isAuthenticated()) {
            return (<Redirect to={{ pathname:'/admin/home' }} />);
        } else {
            return (<Route path="/admin" render={() => <Component />} />);
        }
    } else {
        if(isAuthenticated()) {
            return (<Route render={() => <Component />} />);
        } else {
            return (<Redirect to={{ pathname:'/admin' }} />);
        }
    }

    // return (
    //     <Route 
    //         render={
    //             props => {
    //                 if (isAuthenticated()) {
    //                     return (<Component {...props} />);
    //                 } else {
    //                     return (<Redirect to={{ pathname:'/admin', state: { from: props.location} }} />);
    //                 }
    //             }
    //         } 
    //     />
    // );

    // return(
    //     <Route 
    //         {...rest} 
    //         render={props => {
                
    //             if (isAuthenticated()) {
    //                 return (
    //                     <Component {...props} />
    //                 );
    //             } else {
    //                 return (
    //                     <Redirect
    //                         to={{
    //                             pathname:'/admin',
    //                             state: {
    //                                 from: props.location
    //                             }
    //                         }}
    //                     />
    //                     );
    //             }
    //         }} 
        
    //     />
    // );
}