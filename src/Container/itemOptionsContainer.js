import React,{useEffect,useState} from 'react'
import {ItemOptions} from '../Presentational/itemOptions'
import { useSelector, useDispatch } from 'react-redux';
import {
    selectProductReducer
} from '../reducer/n8Slice';

export const ItemOptionsContainer=(props)=>{
    const dispatch = useDispatch();



    const handleClick=()=>{
        dispatch(selectProductReducer(props.id))


    }

    return <ItemOptions handleClick={handleClick}/>
}
