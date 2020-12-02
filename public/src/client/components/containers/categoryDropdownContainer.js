import React, {useState,useEffect} from 'react'
import {Category_Dropdown} from "../presentational/category_dropdown";

export const CategoryDropdownContainer=(props)=>{
    const [selectedCategory, setSelectedCategory]=useState([null])
    //temporarely commented
    // useEffect(() => {
    //     fetch('http://localhost:3000/db/'+props.category+'.json')
    //         .then(res => res.json())
    //         .then((result) => {console.log(result); setSelectedCategory(result[props.category]);},(error) => { setSelectedCategory(['error']) })
    // }, [])
    const style={
        height: 0,
        visibility: 'hidden',
        opacity: 0,
        overflow: 'hidden'
    }

    return (
        <Category_Dropdown i={selectedCategory} style={style}/>
    )

}