import React from 'react'
import {ParallaxProvider} from "react-scroll-parallax";
import {ProductsDisplayContainer} from "../Container/productsDisplayContainer";
import {BannerContainer} from "../Container/bannerContainer";
import {SeveralDivsContainer} from "../Container/severalDivsContainer";
import {ExtraDivContainer} from "../Container/extraDivContainer";

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
                                   <SeveralDivsContainer/>
                                   <ExtraDivContainer/>
                               </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       </ParallaxProvider>
   )
}