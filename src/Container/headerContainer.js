import React, {useEffect, useState} from "react";
import { Header } from '../Presentational/header'
import {SearchPopUpContainer} from "./searchPopUpContainer";

export const Header_Container=()=>{
    const [showSearch, setShowSearch]= useState(false)
    const handleSearchClick=()=>{
        if(showSearch===false){
            setShowSearch(true)
        }else{
            setShowSearch(false)
        }
    }


    return(
        <Header handleSearchClick={handleSearchClick} showSearch={showSearch}/>


        )

}