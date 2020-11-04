import React from 'react'
import {ParallaxProvider} from "react-scroll-parallax";
import {ProductsDisplayContainer} from "../Container/productsDisplayContainer";

export const Body=(props)=>{
   return (
       <ParallaxProvider>
       <div className='main-wrapper'>
           <div className='main-inner'>
               <div className='full-width'>
                   <div className='full-width-inner'>
                       <div className='grid-row'>
                               <div className='grid-col-12 content-holder'>
                                   <div className='banner-holder'>
                                           <div className='banner-column-container'>
                                               <div className='banner-column-container-inner'>
                                                   <div className='banner-wrapper'>
                                                       <div className='banner-slider-container'>
                                                           {props.paralax}
                                                       </div>
                                                   </div>

                                               </div>
                                           </div>
                                   </div>
                                   <ProductsDisplayContainer/>
                               </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       </ParallaxProvider>
   )
}