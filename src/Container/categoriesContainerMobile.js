import React, {useEffect, useState} from 'react'
import { Categories_Mobile } from '../Presentational/categories_mobile'

export const CategoriesContainerMobile=(props)=>{
    const [categories, setCategories]=useState(['error'])
    const [showMenu, setShowMenu] = useState(false)
    const [showMenuChild, setShowMenuChild] = useState(false)
    const [targetCategory, setTargetCategory] = useState('')
    useEffect(() => {
    fetch('http://localhost:3000/db/categories.json')
      .then(res => res.json())
      .then(
        (result) => {
        console.log(result)
          setCategories(result.Categories);
        },
        (error) => {
          setCategories(['error']);
        }
      )
  }, [])
    useEffect(()=>{
            !showMenu ? setShowMenu(true) : setShowMenu(false)
    }, [props.showMenu])
    const handleClickChild=(target)=>{
        !showMenuChild ? setShowMenuChild(true) : setShowMenuChild(false)
        setTargetCategory(target.dataset.category)
    }

    return (
    <Categories_Mobile categories={categories} showMenu={showMenu} handleClickChild={handleClickChild} showMenuChild={showMenuChild} target={targetCategory}/>

    );

}