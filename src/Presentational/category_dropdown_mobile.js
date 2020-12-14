import React from 'react'
import {CSSTransition} from "react-transition-group";

export const Category_Dropdown_Mobile=(props)=>{
    const items=props.i.map(item => <li key={item} className='mobile-menu-item'><a key={item} className='mobile-menu-item-inner' href='#'>{item}</a></li>)
    return (
        <CSSTransition
            in={props.showMenu}
            timeout={300}
            classNames="downMobile"
            unmountOnExit
        >
            <ul className='sub-menu'>{items}</ul>
        </CSSTransition>
    )
}