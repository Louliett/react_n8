import React from 'react'
import {ItemContainer} from "../Container/itemContainer";
import Ripples from 'react-ripples'

export const ProductsDisplay=(props)=>{

    return (
        <div className='products-content-warpper'>
            <div className='product-grid-row'>
                <div className='row-fluid'>
                    <div className='column-container-12'>
                        <div className='column-container-12-inner'>
                            <div className='column-container-12-inner-wrapper'>
                                <div className='products-holder one-column'>
                                    <div className='eh-item'>
                                        <div className='eh-item-inner'>
                                            <div className='eh-item-content'>
                                                <div className='pl-layout'>
                                                    <div className='pl-outer-space'>
                                                        <div className='pl-sizer'></div>
                                                        <div className='pl-gutter'></div>
                                                        {props.items}
                                                        <div className='empty-space'></div>
                                                            <a className='view-all-button' onClick={props.handleClick} href={props.href}>
                                                                <span className='button-text'>{props.buttonText}
                                                                </span>
                                                            </a>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}