import React,{useEffect,useState} from 'react'
import {ProductsDisplay} from '../Presentational/productsDisplay'
import {ItemContainer} from "./itemContainer";
import {Loading} from "../Presentational/loading";
import {QuickViewContainer} from "./quickViewContainer";
import {useStore} from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import {
    loadProducts,
    selectProductReducer,
    closeModal,
    selectProduct,
    productsExport,
    loadProductsAsync,
    displayPageProducts,
    productsOnPageExport,
} from '../reducer/n8Slice';


export const ProductsDisplayContainer=(props)=>{
    let partialItems=[]
    const products = useSelector(productsExport);
    const productsOnPage = useSelector(productsOnPageExport);
    const selectedProduct = useSelector(selectProduct);
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(loadProductsAsync())},[])

    let items=productsOnPage.map(item => <ItemContainer key={item.id} properties={item}/>)





   /* const handleClick=()=>{
        if(!clicked) {
            setPartialItems(items.length > 12 ? items.slice(0, 12) : items)
            setButtonText('View All')
            setClicked(true)
        }else{
            setHref('http://localhost:3000/view-all')

        }
    }*/
    //const quickView=<QuickViewContainer properties={props.properties} type='quick-view'/>



    return <ProductsDisplay items={items} handleClick={()=>{}} buttonText={'buttonText'}/>
}