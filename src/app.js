import React,{useState} from "react";
import { Header_Container } from './Container/headerContainer'
import { Header_Container_Mobile } from './Container/headerMobileContainer'
import { Footer_Container } from './Container/footerContainer'
import { BodyContainer } from './Container/bodyContainer'
import {QuickViewContainer} from "./Container/quickViewContainer";


export const App=()=>{
    const [pros, setPros]=useState({
        descriptionBrief:'I dont know why you are seeing this but you should not. Make sure to click away and forget about it.',
        tags:['none'],
        srcSmall:['https://cdn.dribbble.com/users/2285628/screenshots/10774525/media/a660ab310be9bed8b4e31e9c3d5dc736.png','https://cdn.dribbble.com/users/2285628/screenshots/10774525/media/a660ab310be9bed8b4e31e9c3d5dc736.png'],
        title: 'You should not be here',
        price:'404.00$',
        src:'https://cdn.dribbble.com/users/2285628/screenshots/10774525/media/a660ab310be9bed8b4e31e9c3d5dc736.png',
        open:'false'
    })
    const setProperties=(properties)=>{
        console.log(properties, 'ass you fucking ass')
        setPros(properties)
    }

    return (
        <React.StrictMode>
            <Header_Container/>
            <Header_Container_Mobile/>
            <BodyContainer setProperties={setProperties}/>
            <QuickViewContainer properties={pros}/>
            <Footer_Container/>
        </React.StrictMode>
      )

}