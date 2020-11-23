import React,{useEffect,useState} from 'react'
import {SearchPopUp} from '../Presentational/searchPopUp'



export const SearchPopUpContainer=(props)=>{
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)

    const handleSearch=(e)=>{
        console.log(e.target)
    }

    const handleCloseSearch=()=>{
        setShowSearch(false)
    }

    useEffect(()=>{
        setShowSearch(props.showSearch)
    },[props.showSearch])

    return(<SearchPopUp handleSearch={handleSearch} showSearch={showSearch} handleCloseSearch={handleCloseSearch}/>)

}
