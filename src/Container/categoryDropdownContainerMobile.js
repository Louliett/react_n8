import React, {useState,useEffect} from 'react'
import {Category_Dropdown_Mobile} from "../Presentational/category_dropdown_mobile";

export const CategoryDropdownContainerMobile=(props)=>{
    const [selectedCategory, setSelectedCategory]=useState([null])
    const [showMenu, setShowMenu] = useState(false)
    useEffect(() => {
        fetch('http://localhost:3000/db/'+props.category+'.json')
            .then(res => res.json())
            .then((result) => {console.log(result); setSelectedCategory(result[props.category]);},(error) => { setSelectedCategory(['error']) })
    }, [])
    useEffect(()=>{
        console.log(props.target, props.category, showMenu, props.show)
        if(props.target===props.category && showMenu==false){
            setShowMenu(true)
        }else if(props.target===props.category && showMenu==true){
            setShowMenu(false)
        }else{
            setShowMenu(false)
        }
    }, [props.target, props.show])



    return (
        <Category_Dropdown_Mobile i={selectedCategory} showMenu={showMenu}/>
    )

}