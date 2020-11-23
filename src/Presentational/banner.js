import React from "react";



export const Banner=(props)=>{
    if(props.type==='small'){
        return(
        <div className='grid'>
            <div className='grid-title-parallax-holder'>
                {props.paralax}
            </div>
        </div>
        )
    }else{
        return (
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
            </div>)
    }
}
