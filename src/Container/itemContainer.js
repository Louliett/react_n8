import React, {useEffect, useState} from 'react'
import {Item} from '../Presentational/item'
import {ItemOptionsContainer} from "./itemOptionsContainer";
import {ProductsDisplay} from "../Presentational/productsDisplay";


export const ItemContainer=(props)=>{
    const [srcLoading, setSrcLoading]=useState('http://localhost:3000/images/loader_backinout.gif')
    return <Item properties={props.properties} options={<ItemOptionsContainer id={props.properties.id}/>} src={srcLoading}/>
}