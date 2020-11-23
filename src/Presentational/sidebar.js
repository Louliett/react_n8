import React,{useState} from "react";
import {RangeSlider} from "../Container/dragContainer";



export const Sidebar=(props)=>{
    const colorsElements=props.colors.map(item => <li className='filter' onClick={props.handleColorClick}><a style={{cursor:'pointer', pointerEvents:'none',userSelect:'none'}}>{item.color} ({item.number})</a></li>)
    const materialsElements=props.materials.map(item => <li className='filter' onClick={props.handleMaterialClick}><a style={{cursor:'pointer', pointerEvents:'none',userSelect:'none'}}>{item.material} ({item.number})</a></li>)
    return(
        <div className='sidebar-holder grid-col-3 grid-col-pull-9 clearfix'>
            <aside className='sidebar'>


                <div className='separator'>
                    <div className='separator-holder clearfix'>
                        <div className='separator-inner'></div>
                    </div>
                </div>
                <div className='nav_layered'>
                    <div className='title-holder'>
                        <h4 className='nav-layered-title'>Color</h4>
                    </div>
                    <ul className='layered-ul'>
                        {colorsElements}
                    </ul>
                </div>


                <div className='separator'>
                    <div className='separator-holder clearfix'>
                        <div className='separator-inner'></div>

                    </div>
                </div>
                <div className='nav_layered'>
                    <div className='title-holder'>
                        <h4 className='nav-layered-title'>Material</h4>
                    </div>
                    <ul className='layered-ul'>
                        {materialsElements}
                    </ul>
                </div>

                <div className='separator'>
                    <div className='separator-holder clearfix'>
                        <div className='separator-inner'></div>

                    </div>
                </div>
                <div className='price-filter'>
                    <div className='title-holder'>
                        <h4 className='nav-layered-title'>Price Range</h4>
                    </div>
                    <RangeSlider handleFilterClick={props.handleFilterClick} priceRange={props.priceRange}/>

                </div>
                <div className='product-search'>
                    <div role="search" className="product-search-form">
                        <label className="search-text">Search for:</label>
                        <div className="input-holder clearfix">
                            <input type='text' className='search-field' onChange={props.handleSearchChange} placeholder='Search...'/>
                            <button onClick={props.handleSearchClick} className="search-button">
                                <span aria-hidden="true" className="search-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px">
                                        <path d="M0 0h24v24H0V0z" fill="none"/>
                                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

            </aside>

        </div>
    )
}
