import React, {useEffect,useState} from 'react'
import {CarouselContainer} from './carouselContainer'
import {Body} from '../Presentational/body'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {SeveralDivsContainer} from "./severalDivsContainer";
import {ViewAllContainer} from "./viewAllContainer";
import {FullViewContainer} from "./fullViewContainer";
import {QuickViewContainer} from "./quickViewContainer";
import {VinContainer} from "./vinContainer";
//contains routes for other containers as well

export const BodyContainer=(props)=>{



    return (<Router>
            <Switch>
                <Route exact path="/">
                    <Body />
                    <QuickViewContainer type='quick-view'/>
                </Route>
                <Route path="/view-all">
                    <ViewAllContainer setProperties={props.setProperties}/>
                    <QuickViewContainer properties={props.properties} type='quick-view'/>
                </Route>
                <Route path="/product">
                    <QuickViewContainer properties={props.properties} type='full-view'/>
                </Route>
                <Route path="/vin">
                    <VinContainer/>
                </Route>
            </Switch>
    </Router>
);
}

