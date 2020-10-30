import React, {useEffect,useState} from 'react'
import {CarouselContainer} from './carouselContainer'
import {Body} from '../Presentational/body'
import {ParallaxBanner} from "react-scroll-parallax";

export const BodyContainer=()=>{
    const paralax=(
        <ParallaxBanner
            className="paralax-class"
            layers={[
                {
                    image: 'https://cdn.dribbble.com/users/1239000/screenshots/5976845/artdeco.jpg',
                    amount: 0.1,
                },
                {
                    image: 'https://cdn.dribbble.com/users/1144167/screenshots/9788213/media/b3a283b29b43b67c2e676dd345e4c3c7.jpg',
                    amount: 0.2,
                },
            ]}
            style={{
                height: '600px',
            }}
        >
            <div className='banner-text'><h1>Banner Children</h1><br/><p>This is some bullshit text</p></div>
        </ParallaxBanner>
    )
    return <Body carouselContainer={<CarouselContainer/>} paralax={paralax}/>
}

