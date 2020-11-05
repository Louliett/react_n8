import React,{useEffect,useState} from "react";
import {Banner} from '../Presentational/banner'
import {ParallaxBanner} from "react-scroll-parallax";



export const BannerContainer=()=>{
    const paralax=(
        <ParallaxBanner
            className="paralax-class"
            layers={[
                {
                    image: 'https://cdn.dribbble.com/users/1655663/screenshots/6389755/brknstw_mmh-pattern-dribbble.png',
                    amount: 0.8
                },
                {
                    image: 'https://cdn.dribbble.com/users/1655663/screenshots/6389755/brknstw_mmh-pattern-dribbble.png',
                    amount: 0.2,
                },
            ]}
            style={{
                height: '578px'
            }}
        >
            <div className='banner-text-wrapper'><div className='banner-text'><h1 className='banner-title-text-actual'>Banner Children</h1><br/><p className='banner-info-text-actual'>Last night of all,
                When yond same star that's westward from the pole
                Had made his course to illume that part of heaven
                Where now it burns, Marcellus and myself,
                The bell then beating one,--</p><a className='read-more-button'>
                <span className='read-more-text'>Learn More</span>
                <span className='button-background-holder'>
                        <span className='button-background-actual'></span>
                    </span>
            </a></div>
            </div>
        </ParallaxBanner>
    )
    return <Banner paralax={paralax}/>
}