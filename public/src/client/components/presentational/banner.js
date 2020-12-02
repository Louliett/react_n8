import React from "react";



export const Banner=(props)=>{
    return(
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
