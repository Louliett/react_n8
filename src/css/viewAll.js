import React from "react";
import {ParallaxProvider} from "react-scroll-parallax/cjs";
import {BannerContainer} from "../Container/bannerContainer";
import {SidebarContainer} from "../Container/sidebarContainer";




export const ViewAll=(props)=>{

    //will need to make some fetch for the banner info

    var bannerChildren=''
    if(props.bannerTitle.s != undefined){
            bannerChildren=  (
                <div className='grid-title-parallax-title'>
                    <div className='title-inner'>
                        <div className='title-container'>
                            <h2 className='entry-title'>
                                {props.bannerTitle.s}
                            </h2>
                        </div>
                    </div>
                </div>)
        }
        else{ bannerChildren= (
            <div className='grid-title-parallax-title'>
                <div className='title-inner'>
                    <div className='title-container'>
                        <h2 className='entry-title'>
                            All
                            <br/>
                            Items
                        </h2>
                    </div>
                </div>
            </div>)
        }


    const src='https://tonda.qodeinteractive.com/wp-content/uploads/2018/03/title-img-3.jpg'
    const className='grid'
    const style={height:'100%'}



    return (
        <ParallaxProvider>
            <div className='content'>
                <div className='content-inner'>
                    <BannerContainer children={bannerChildren} src={src} class={className} type='small'/>

                    <div className='container clearfix'>
                        <div className='container-inner clearfix'>
                            <div className='grid-row grid-massive-gut clearfix'>
                                <div className='content-holder grid-col-9 grid-col-push-3 clearfix'>
                                    <p className='result'>Showing {1+((props.currentPage-1)*9)}-{props.currentPage*9} of {props.itmesLength}</p>
                                    <form className='ordering' method='get'>
                                        <select name="orderby" className="orderby hidden-accessible"
                                                aria-label="Shop order" tabIndex="-1" aria-hidden="true">
                                            <option value="menu_order" selected="selected">Default sorting</option>
                                            <option value="popularity">Sort by popularity</option>
                                            <option value="date">Sort by latest</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: high to low</option>
                                        </select>
                                        <span className='select-container'>
                                            <span className='select'>
                                                <span onClick={props.handleSelectClick} className='select-selection role="combobox" aria-haspopup="true" aria-expanded=$({props.expanded}) tabindex="0" aria-labelledby="select-selection-container"'>
                                                    <span id='select-selection-container' className='select-selection-container' style={{color:props.iconFill}}>{props.sorting}</span>
                                                    <span className='select-selection-arrow'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={props.iconFill} width="24px" height="24px">
                                                            <path d="M0 0h24v24H0V0z" fill="none"/>
                                                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                                                        </svg>
                                                    </span>

                                                </span>

                                            </span>
                                            <span className='dropdown-wrapper' aria-hidden='true'>

                                            </span>
                                            <span className={'absolute-dropdown ' + props.visible}>
                                                <span className='absolute-dropdown-below'>
                                                    <span className='absolute-dropdown-results'>
                                                        <ul>
                                                            <li onClick={props.handleSortingClick} data-type='Default Sorting'>Default Sorting</li>
                                                            <li onClick={props.handleSortingClick} data-type='Sort by Popularity'>Sort by Popularity</li>
                                                            <li onClick={props.handleSortingClick} data-type='Sort by latest'>Sort by Latest</li>
                                                            <li onClick={props.handleSortingClick} data-type='Price: low to high'>Price: low to high</li>
                                                            <li onClick={props.handleSortingClick} data-type='Price: high to low'>Price: high to low</li>
                                                        </ul>

                                                    </span>
                                                </span>

                                            </span>

                                        </span>

                                    </form>
                                    <div className='plunder-main-holder'>
                                        <ul className='products columns-4'>
                                            {props.items}

                                        </ul>

                                    </div>
                                    <nav className='pagination'>
                                        <ul className='page-numbers'>
                                            {props.pagination}

                                        </ul>
                                    </nav>

                                </div>
                                <SidebarContainer allItems={props.allItems} handleColorClick={props.handleColorClick} handleMaterialClick={props.handleMaterialClick} handleFilterClick={props.handleFilterClick} handleSearchClick={props.handleSearchClick}/>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </ParallaxProvider>
    )
}
