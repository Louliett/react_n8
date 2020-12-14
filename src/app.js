import React,{useState} from "react";
import { Header_Container } from './Container/headerContainer'
import { Header_Container_Mobile } from './Container/headerMobileContainer'
import { Footer_Container } from './Container/footerContainer'
import { BodyContainer } from './Container/bodyContainer'
import {QuickViewContainer} from "./Container/quickViewContainer";
import {store} from "./reducer/reducers";
import {ItemContainer} from "./Container/itemContainer";


export const App=()=>{
    console.log('APP RENDER MEANS EVERYTHING RENDER')
    try {
        fetch('http://localhost:3000/db/items_old.json')
            .then(res => res.json())
            .then((result) => {
                /*setItems(result['items'].map(item => <ItemContainer key={item.title} setProperties={props.setProperties}
                                                                    descriptionBrief={item.descriptionBrief}
                                                                    tags={item.tags} srcSmall={item.srcSmall}
                                                                    title={item.title} price={item.price} src={item.src}
                                                                    colors={item.srcColors.map(x=>x.color)} materials={item.materials}
                                                                    srcColors={item.srcColors} id={item.id} fullInfo={item.fullInfo}/>));*/
                store.dispatch({type:'LOAD_PRODUCTS',payload:result['items']})

            }, (error) => {
                console.log('error fetching items',error)
            })
    } catch (e) {
        console.log(e)
    }

    return (
        <div>
            <Header_Container/>
            <Header_Container_Mobile/>
            <BodyContainer/>
            <Footer_Container/>
        </div>
      )

}