import React,{useState} from "react";
import { Header_Container } from './Container/headerContainer'
import { Header_Container_Mobile } from './Container/headerMobileContainer'
import { Footer_Container } from './Container/footerContainer'
import { BodyContainer } from './Container/bodyContainer'
import {QuickViewContainer} from "./Container/quickViewContainer";


export const App=()=>{


    return (
        <div>
            <Header_Container/>
            <Header_Container_Mobile/>
            <BodyContainer/>
            <QuickViewContainer/>
            <Footer_Container/>
        </div>
      )

}