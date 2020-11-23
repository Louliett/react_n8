import React, {useEffect, useState} from 'react'
import {Item} from '../Presentational/item'
import {ItemOptionsContainer} from "./itemOptionsContainer";
import {ProductsDisplay} from "../Presentational/productsDisplay";


export const ItemContainer=(props)=>{
    const properties = {descriptionBrief:props.descriptionBrief, tags:props.tags, srcSmall:props.srcSmall, title:props.title, price:props.price, src:props.src}
    return <Item options={<ItemOptionsContainer properties={properties} setProperties={props.setProperties}/>} src={props.src} title={props.title} price={props.price} />
}