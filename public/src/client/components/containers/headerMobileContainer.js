import React, {useEffect, useState} from "react";
import { Header_Mobile } from '../presentational/header_mobile'
import { CategoriesContainerMobile } from './categoriesContainerMobile'


export const Header_Container_Mobile=()=>{
    const [showMenu, setShowMenu] = useState(false)


    const handleClick=()=>{
        !showMenu ? setShowMenu(true) : setShowMenu(false)

    }
    const navbar=<CategoriesContainerMobile class={'mobile-category-menu-active'} showMenu={showMenu}/>


    return(
        <Header_Mobile handleClick={handleClick} navbar={navbar}/>


        )

}