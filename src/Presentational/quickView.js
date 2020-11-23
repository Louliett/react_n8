import React from "react";


export const QuickView = (props) => {
    console.log(props, 'we end')
    const selectClass=()=>{
        if(props.showView){
            return 'quick-view '+props.properties.open
        }else{
            return 'quick-view'
        }
    }
    const smallImages=props.properties.srcSmall.map(image => (<div className='product-image-small'>
        <a onClick={props.switchImage} className='product-image-link'>
            <img className='actual-product-image-small' src={image} alt={props.title}/>
        </a>
    </div>))
    
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
                                                    <img className='actual-product-image' src={props.properties.src} alt='image'/>
                                                </a>
                                                <img className='actual-product-image-zoomed' onMouseOver={props.handleHoverEnter} onMouseLeave={props.handleHoverExit} onMouseMove={props.handleHover} src={props.properties.src}/>


                                            </div>
                                            {smallImages}

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

                                                <div className="quantity-buttons">
                                                    <label className="screen-reader-text"
                                                           htmlFor="quantity_5fb27831d5095">{props.properties.title} quantity</label>
                                                    <span className="quantity-label">Quantity</span>
                                                    <span onClick={props.handleQuantityMinus} className="quantity-minus">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                                                    </span>
                                                    <input type="text" id="quantity_id"
                                                           className="input-text text"
                                                           data-step="1" data-min="1" data-max="" name="quantity"
                                                           value={props.quantity}
                                                           title="Qty" size="4" pattern="[0-9]*" inputMode="numeric"/>
                                                    <span onClick={props.handleQuantityPlus} className="quantity-plus">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                                                    </span>
                                                    {/* Maybe make this into a component */}
                                                    <table className='variations' cellSpacing='0'>
                                                        <tbody>
                                                        <tr>
                                                            <td className='label'>
                                                                <label htmlFor="product_colors">Colors</label>

                                                            </td>
                                                            <td className='value'>
                                                                <form className='ordering' method='get'>
                                                                    <select name="orderby" className="orderby hidden-accessible"
                                                                            aria-label="Shop order" tabIndex="-1" aria-hidden="true">
                                                                        <option value="menu_order" selected="selected">Default sorting</option>
                                                                    </select>
                                                                    <span className='select-container'>
                                            <span className='select'>
                                                <span onClick={props.handleSelectClick} className='select-selection role="combobox" aria-haspopup="true" aria-expanded=$({props.expanded}) tabindex="0" aria-labelledby="select-selection-container"'>
                                                    <span id='select-selection-container' className='select-selection-container' style={{color:props.iconFill}}>{props.colorSorting}</span>
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

                                        </span>

                                                                </form>

                                                            </td>
                                                        </tr>
                                                        </tbody>

                                                    </table>
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
                                                <span className='view-more-text'>View full details</span>
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
