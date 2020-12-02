import React from 'react'
import {ItemContainer} from "../containers/itemContainer";
import Ripples from 'react-ripples'

export const ProductsDisplay=(props)=>{
    var itemsContainer=[]

    if(props.items.length>0){
    itemsContainer=props.items.map(item=><ItemContainer title={item.title} price={item.price} src={item.src} position={props.position}/>)}

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
                                                        {itemsContainer}
                                                        <div className='empty-space'></div>
                                                            <a className='view-all-button'>
                                                                <span className='button-text'>View All
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