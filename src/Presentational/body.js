import React from 'react'
import {ParallaxProvider} from "react-scroll-parallax";
import {ProductsDisplayContainer} from "../Container/productsDisplayContainer";
import {BannerContainer} from "../Container/bannerContainer";
import {SeveralDivsContainer} from "../Container/severalDivsContainer";
import {ExtraDivContainer} from "../Container/extraDivContainer";

export const Body=(props)=>{

    //will need to make some fetch for the banner info

    const bannerChildren=(<div className='banner-text-wrapper'><div className='banner-text'><h1 className='banner-title-text-actual'>Banner Children</h1><br/><p className='banner-info-text-actual'>Last night of all,
        When yond same star that's westward from the pole
        Had made his course to illume that part of heaven
        Where now it burns, Marcellus and myself,
        The bell then beating one,--</p><a className='read-more-button'>
        <span className='read-more-text'>Learn More</span>
        <span className='button-background-holder'>
                        <span className='button-background-actual'></span>
                    </span>
    </a></div>
    </div>)
    const src='https://cdn.dribbble.com/users/594915/screenshots/9439018/media/9561b6d85c115a3c85040af92c757f42.jpg'
    const style={height:'561px'}
    const className='paralax-class'


   return (
       <ParallaxProvider>
       <div className='main-wrapper'>
           <div className='main-inner'>
               <div className='full-width'>
                   <div className='full-width-inner'>
                       <div className='grid-row'>
                               <div className='grid-col-12 content-holder'>
                                   <BannerContainer children={bannerChildren} src={src} style={style} class={className} type='full'/>
                                   <ProductsDisplayContainer setProperties={props.setProperties}/>
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