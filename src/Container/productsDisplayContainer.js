import React,{useEffect,useState} from 'react'
import {ProductsDisplay} from '../Presentational/productsDisplay'
import {ItemContainer} from "./itemContainer";


export const ProductsDisplayContainer=()=>{
    const [items, setItems]=useState({error:'error'})

        useEffect(()=> {
            fetch('http://localhost:3000/db/items_old.json')
                .then(res => res.json())
                .then((result) => {
                    console.log(result);
                    setItems(result['items']);
                }, (error) => {
                    setItems({error: 'error'})
                })
        },[])


    return <ProductsDisplay items={items}/>
}