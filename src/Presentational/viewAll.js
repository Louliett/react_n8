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
                                    <p className='result'>Showing {props.items.length>9 ? 1+((props.currentPage-1)*9) : 1}-{props.items.length>9 ? props.currentPage*9 : props.items.length} of {props.itmesLength}</p>
                                    {props.selectMenu}
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
