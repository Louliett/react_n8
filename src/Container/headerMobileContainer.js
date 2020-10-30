import React, {useEffect, useState} from "react";
import { Header_Mobile } from '../Presentational/header_mobile'
import { CategoriesContainerMobile } from '../Container/categoriesContainerMobile'


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