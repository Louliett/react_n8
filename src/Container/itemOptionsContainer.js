import React,{useEffect,useState} from 'react'
import {ItemOptions} from '../Presentational/itemOptions'
import {QuickViewContainer} from "./quickViewContainer";


export const ItemOptionsContainer=(props)=>{
    const [proper, setProper] =useState('false')


    const handleClick=()=>{
            props.setProperties({...props.properties,open:true})

    }

    return <ItemOptions view={props.view} handleClick={handleClick}/>
}
