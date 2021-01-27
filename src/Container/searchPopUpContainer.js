import React,{useEffect,useState} from 'react'
import {SearchPopUp} from '../Presentational/searchPopUp'
import {useHistory} from "react-router-dom";




export const SearchPopUpContainer=(props)=>{
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    let history = useHistory();
    console.log(history, useHistory, useHistory(), 'why')



    const handleSearch=(e)=>{
        console.log(e.target)
    }

    const handleCloseSearch=()=>{
        setShowSearch(false)
    }

    useEffect(()=>{
        setShowSearch(props.showSearch)
    },[props.showSearch])

    const handleClick=()=>{
        console.log(history)
        history.push('/view-all?s='+search);
    }
    const handleOnChange=(e)=>{
        setSearch(e.target.value)
    }

    return(<SearchPopUp handleChange={handleOnChange} handleClick={handleClick} handleSearch={handleSearch} showSearch={showSearch} handleCloseSearch={handleCloseSearch}/>)

}
