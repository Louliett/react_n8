import React, {useEffect,useState} from 'react'
import {CarouselContainer} from './carouselContainer'
import {Body} from '../Presentational/body'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {SeveralDivsContainer} from "./severalDivsContainer";
import {ViewAllContainer} from "./viewAllContainer";

export const BodyContainer=(props)=>{
    return (<Router>
            <Switch>
                <Route exact path="/">
                    <Body setProperties={props.setProperties} />
                </Route>
                <Route path="/view-all">
                    <ViewAllContainer setProperties={props.setProperties}/>
                </Route>
                <Route path="/something-else">
                    <SeveralDivsContainer />
                </Route>
            </Switch>
    </Router>
);
}

