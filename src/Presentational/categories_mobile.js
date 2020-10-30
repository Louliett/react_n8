import React from 'react'
import {CSSTransition} from 'react-transition-group';
import {CategoryDropdownContainerMobile} from "../Container/categoryDropdownContainerMobile";

export const Categories_Mobile=(props)=>{
    const categories=props.categories.map(string => <li className='mobile-category-item'><a onClick={(e)=>{props.handleClickChild(e.target);console.log(e.target)}} data-category={string} className='mobile-category-link'><span data-category={string}>{string}</span></a><span className='menu-arrow'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 9.9 6l6 6-6 6-1.41-1.41z"/></svg></span><CategoryDropdownContainerMobile category={string} show={props.showMenuChild} target={props.target}/></li>)

    return(
        <CSSTransition
            in={props.showMenu}
            timeout={300}
            classNames="down"
            unmountOnExit
        >
        <nav className='mobile-category-menu'>
            <div className='mobile-nav-inner'>
                <ul className='mobile-category-ul'>
                    {categories}
                </ul>
            </div>

        </nav>
        </CSSTransition>

    )
}