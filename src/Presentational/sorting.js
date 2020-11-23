import React from "react";


export const Sorting=(props)=>{
    return(
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
                                                <span onClick={props.handleMenuClick} className='select-selection role="combobox" aria-haspopup="true" aria-expanded=$({props.expanded}) tabindex="0" aria-labelledby="select-selection-container"'>
                                                    <span id='select-selection-container' className='select-selection-container' style={{color:props.visible[1]}}>{props.sorting}</span>
                                                    <span className='select-selection-arrow'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={props.visible[1]} width="24px" height="24px">
                                                            <path d="M0 0h24v24H0V0z" fill="none"/>
                                                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                                                        </svg>
                                                    </span>

                                                </span>

                                            </span>
                                            <span className='dropdown-wrapper' aria-hidden='true'>

                                            </span>
                                            <span className={'absolute-dropdown ' + props.visible[0]}>
                                                <span className='absolute-dropdown-below'>
                                                    <span className='absolute-dropdown-results'>
                                                        <ul>
                                                            {props.jsxListItems}

                                                        </ul>

                                                    </span>
                                                </span>

                                            </span>

                                        </span>

        </form>
    )
}
