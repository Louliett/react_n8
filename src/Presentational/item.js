import React from 'react'
import {ItemOptionsContainer} from "../Container/itemOptionsContainer";


export const Item=(props)=>{
    return (
        <div className='item-space product'>
            <div className='item-space-inner'>
                <div className='item-space-inner-image'>
                    <img className='product-image' src={props.src}/>

                </div>
                {props.options}

            </div>
            <div className='text-wrapper'>
                <div className='main-info'>
                    <h4 className='main-info-title'><a href='#'>{props.title}</a></h4>
                    <div className='item-price'>
                        <span class='amount'>
                            {props.price}
                            <span className='currency'> .лв</span>
                        </span>
                    </div>

                </div>
                <div className='additional-info'>

                </div>
            </div>
        </div>
            )
}
