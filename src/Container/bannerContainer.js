import React,{useEffect,useState} from "react";
import {Banner} from '../Presentational/banner'
import {ParallaxBanner} from "react-scroll-parallax";



export const BannerContainer=(props)=>{
    const [type,setType]=useState(props.type)
    const paralax=(
        <ParallaxBanner
            className={props.class}
            layers={[
                {
                    image: props.src,
                    amount: 0.58
                }
            ]}
            style={props.style}

        >
            {props.children}
        </ParallaxBanner>
    )
    return <Banner paralax={paralax} type={type}/>
}