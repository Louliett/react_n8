import React from 'react'
import {ItemOptionsContainer} from "../Container/itemOptionsContainer";


export const Item=(props)=>{

    return (
        <div className='item-space product'>
            <div className='item-space-inner'>
                <div className='item-space-inner-image'>
                    <img className='product-image' onError={props.loading} src={props.properties.src}/>

                </div>
                {props.options}

            </div>
            <div className='text-wrapper'>
                <div className='main-info'>
                    <h4 className='main-info-title'><a href='#'>{props.properties.title}</a></h4>
                    <div className='item-price'>
                        <span className='amount'>
                            {props.properties.price}
                            <span className='currency'> лв.</span>
                        </span>
                    </div>

                </div>
                <div className='additional-info'>

                </div>
            </div>
        </div>
            )
}
