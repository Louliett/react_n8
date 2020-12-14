import React, {useEffect, useState} from 'react'
import {Item} from '../Presentational/item'
import {ItemOptionsContainer} from "./itemOptionsContainer";
import {ProductsDisplay} from "../Presentational/productsDisplay";


export const ItemContainer=(props)=>{
    const [srcLoading, setSrcLoading]=useState('http://localhost:3000/images/loader_backinout.gif')
    useEffect(()=>{
        setSrcLoading(props.src)
    },[props])
    const loading=(e)=>{
        console.log('error from image')
        e.target.src= 'http://localhost:3000/images/loader_backinout.gif'
    }
    const properties = {descriptionBrief:props.descriptionBrief, tags:props.tags, srcSmall:props.srcSmall, title:props.title, price:props.price, src:props.src, colors:props.colors, materials:props.materials, srcColors:props.srcColors, id:props.id, fullInfo:props.fullInfo}
    return <Item options={<ItemOptionsContainer properties={properties} setProperties={props.setProperties}/>} src={srcLoading} title={props.title} price={props.price} loading={loading}/>
}