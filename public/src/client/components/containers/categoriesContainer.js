import React, {useEffect, useState} from 'react'
import { Categories } from '../presentational/categories'
import {Category_Dropdown} from "../presentational/category_dropdown";

export const CategoriesContainer=(props)=>{
    const [categories, setCategories]=useState([])
        const handleHover=(e)=>{
        e.stopPropagation()
            //const rect =e.target.getBoundingClientRect()
            //setPosition({top:rect.bottom, left:rect.left})
            //setToggleClass('dropdown-holder-active')
            if(e.target.getAttribute('class')=='category-link'){
                        e.target.parentNode.children[1].classList.add('dropdown-holder-active')
            }else if(e.target.getAttribute('class')=='category-item'){
                        e.target.children[1].classList.add('dropdown-holder-active')

            }
            //console.log(e.target)

        };
        const handleHoverLeave=(e)=>{
            if(e.target.getAttribute('class')=='category-link'){
                                    e.target.parentNode.children[1].classList.remove('dropdown-holder-active')
            }else if(e.target.getAttribute('class')=='category-item'){
               e.target.children[1].classList.remove('dropdown-holder-active')

             }
        };
        const handleChildEvent=(e)=>{
            e.stopPropagation()
            e.stopPropagation();

        };

    //temporarely commented
    // useEffect(() => {
    // fetch('http://localhost:3000/db/categories.json')
    //   .then(res => res.json())
    //   .then((result) => {setCategories(result.Categories)},(error) => { setCategories(['error']) })
    //     }, [])


    return <Categories c={categories} handleHover={handleHover} handleHoverLeave={handleHoverLeave} handleChildEvent={handleChildEvent} tf={props.tf}/>

}