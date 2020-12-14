import React from "react";
import {Loading} from "./loading";
import {Image} from "./image";


export const FullView=(props)=>{
    console.log(props, 'full-view should render')
    let tagItems=<Loading/>
    let smallImagesNew=(<div><Loading/><Loading/><Loading/><Loading/></div>)

    if(props.properties.tags != undefined) {
        tagItems = props.properties.tags.map(tag => (
            <a key={tag} href={'http://localhost:3000/view-all?s=' + tag}>{tag} </a>))
    }


        try {
            smallImagesNew = props.images.srcColors.find(x => x.color == props.selectedColor).images.map((imageObject, index) => (
                <div key={index} className='product-image-small'>
                    <Image switchImage={props.switchImage} src={imageObject} alt={imageObject} key={index}/>
                </div>))
        }catch(e){
            console.log(e)
        }






    return (
        <div className='full-view-content'>
            <div className='full-view-content-inner'>
                <div className='full-view-container'>
                    <div className='full-view-container-inner clearfix'>
                        <div className='notices'></div>
                        <div className='full-view-product'>
                            <div className='full-view-single-product'>
                                <div className='full-view-product-gallery'>
                                    <div onMouseEnter={props.zoom} className='full-view-product-gallery-wrapper'>
                                        <figure className='gallery-wrapper'>
                                            <div className='gallery-image-main'>
                                                <a className='image-redirect'>
                                                    <img className='actual-product-image' src={props.images.src} alt='image'/>
                                                </a>
                                                <img className='actual-product-image-zoomed' onMouseOver={props.handleHoverEnter} onMouseLeave={props.handleHoverExit} onMouseMove={props.handleHover} src={props.images.src}/>


                                            </div>
                                            {smallImagesNew}

                                        </figure>
                                    </div>

                                </div>
                                <div className='full-view-single-product-summary'>
                                    <div className='full-view-single-product-entry-summary'>
                                        <h2 className='single-product-title'>{props.properties.title}</h2>
                                        <p className='price'><span className='amount'>{props.properties.price}.лв</span></p>
                                        <div className='short-description'><p>{props.properties.descriptionBrief}</p></div>
                                        <div className='meta'>
                                            <span className='sku-wrapper'>SKU: {props.fullInfo.sku}</span>
                                            <span className='tagged-as'>Tags: {tagItems}</span>
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
                                                <span id="quantity_id"
                                                       className="input-text text">
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

                                    </div>

                                </div>

                            </div>
                            <div className='toilet-tabs'>

                            </div>
                            <div className='related-products'>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
