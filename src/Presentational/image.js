import React from "react";


export const Image=(props)=>{
    return (
        <a onClick={props.switchImage} className='product-image-link'>
            <img className='actual-product-image-small' src={props.src} alt={props.color}/>
        </a>
    )
}

