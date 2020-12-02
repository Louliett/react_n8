import React from 'react'
import {ParallaxProvider} from "react-scroll-parallax";
import {ProductsDisplayContainer} from "../containers/productsDisplayContainer";
import {BannerContainer} from "../containers/bannerContainer";
import {TwoDivsContainer} from "../containers/twoDivsContainer";

export const Body=(props)=>{
   return (
       <ParallaxProvider>
       <div className='main-wrapper'>
           <div className='main-inner'>
               <div className='full-width'>
                   <div className='full-width-inner'>
                       <div className='grid-row'>
                               <div className='grid-col-12 content-holder'>
                                   <BannerContainer/>
                                   <ProductsDisplayContainer/>
                                   <TwoDivsContainer/>
                               </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       </ParallaxProvider>
   )
}