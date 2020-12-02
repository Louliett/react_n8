import React, {useEffect, useState} from 'react'
import {Item} from '../presentational/item'
import {ItemOptionsContainer} from "./itemOptionsContainer";


export const ItemContainer=(props)=>{
    return <Item options={<ItemOptionsContainer/>} src={props.src} title={props.title} price={props.price} />
}