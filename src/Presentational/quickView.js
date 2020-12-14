import React from "react";
import {Image} from "./image";
import {Loading} from "./loading";


export const QuickView = (props) => {
    console.log(props,'quick-view should not run')
    const selectClass=()=>{
        if(props.showView){
            return 'quick-view '+props.properties.open
        }else{
            return 'quick-view'
        }
    }
   // console.log('props: ', props, 'srcColors: ', props.properties.srcColors, 'selectedColor:',props.selectedColor)
   // console.log(props.properties.srcColors.find(x => x.color==props.selectedColor),'help', props.options)
    let smallImagesNew=<Loading/>

    try{
    smallImagesNew=props.images.srcColors.find(x => x.color==props.selectedColor).images.map((imageObject,index) => (<div key={index} className='product-image-small'>
        <Image switchImage={props.switchImage} src={imageObject} alt={imageObject} key={index}/>
    </div>))
    }catch(e){console.log(e,'quickView')}
    
    return (
            <div className={selectClass()}>
                <div onClick={props.handleCloseClick} className='quick-view-overlay'></div>
                <div className='quick-view-product-wrapper'>
                    <div className='quick-view-product-main'>
                        <div className='quick-view-product-main-head'>
                            <a onClick={props.handleCloseClick} className='quick-view-close'>X</a>
                        </div>
                        <div className='quick-view-content'>
                            <div className='quick-view-product'>
                                <div id={props.id} className='quick-view-product type-product status-publish has-post-thumbnail product-cat-essentials product-tag-gadgets product-tag-minimalistic first in-stock shipping-taxable purchasable product-type-simple'>
                                    <div onMouseEnter={props.zoom} className='product-gallery'>
                                        <figure className='gallery-wrapper'>
                                            <div className='gallery-image-main'>
                                                <a className='image-redirect'>
                                                    <img className='actual-product-image' src={props.images.src} alt='image'/>
                                                </a>
                                                <img className='actual-product-image-zoomed' onMouseOver={props.handleHoverEnter} onMouseLeave={props.handleHoverExit} onMouseMove={props.handleHover} src={props.images.src}/>


                                            </div>
                                            {/*smallImages*/}
                                            {smallImagesNew}

                                        </figure>
                                    </div>
                                    <div className='product-summary'>
                                        <div className="product-summary-content">
                                            <h2 itemProp="name" className="product-title">{props.properties.title}</h2><p className="price"><span
                                            className="price-amount"><span
                                            className="price-currency"></span>{props.properties.price}</span>.лв</p>
                                            <div className="short-description">
                                                <p>{props.properties.descriptionBrief}</p>
                                            </div>


                                            <div className="cart">
                                                <div className='options-container'>
                                                    {props.colorSelect}
                                                    {props.materialSelect}
                                                </div>

                                                <div className="quantity-buttons">
                                                    <label className="screen-reader-text"
                                                           htmlFor="quantity_5fb27831d5095">{props.properties.title} quantity</label>
                                                    <span className="quantity-label">Quantity</span>
                                                    <span onClick={props.handleQuantityMinus} className="quantity-minus">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                                                    </span>
                                                    <span id="quantity_id" className="input-text text">
                                                        {props.quantity}
                                                    </span>
                                                    <span onClick={props.handleQuantityPlus} className="quantity-plus">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                                                    </span>
                                                </div>


                                                <button type="submit" name="add-to-cart" value="1128"
                                                        className="single_add_to_cart_button button alt">Add to cart
                                                </button>

                                            </div>


                                            <div className="add-to-wishlist1">
                                                <div className="add-button hide" style={{display:"block"}}>


                                                    <a data-product-id="1128" data-product-type="simple"
                                                       className="add-to-wishlist-button">
                                                        Add to Wishlist</a>
                                                </div>

                                                <div className="added-to-wishlist hide" style={{display:"none"}}>
                                                    <span className="feedback">Product added!</span>
                                                    <a>Browse Wishlist </a>
                                                </div>

                                                <div className="wishlist-exists show" style={{display:"none"}}>
                                                <span
                                                    className="feedback">The product is already in the wishlist!</span>
                                                    <a>Browse Wishlist</a>
                                                </div>

                                                <div style={{clear:"both"}}></div>
                                                <div className="wishlist-add-response"></div>

                                            </div>

                                            <div className='clear'></div>
                                            <a className='view-more-button'>
                                                <span onClick={props.handleViewFullClick} className='view-more-text'>View full details</span>
                                            </a>

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
