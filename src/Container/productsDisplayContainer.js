import React,{useEffect,useState} from 'react'
import {ProductsDisplay} from '../Presentational/productsDisplay'
import {ItemContainer} from "./itemContainer";
import {Loading} from "../Presentational/loading";
import {QuickViewContainer} from "./quickViewContainer";
import {useStore} from "react-redux";
import {store} from "../reducer/reducers";


export const ProductsDisplayContainer=(props)=>{
    //const [items, setItems]=useState([<Loading key='loading'/>]) //gonna put a loading component here
    const [partialItems, setPartialItems]=useState([<Loading key='partialLoading'/>])
    const [buttonText, setButtonText]=useState('View More')
    const [clicked, setClicked]=useState(false)
    const [href, setHref]=useState('javascript:void(0);')
    console.log(store.getState(),'how')
    let items=store.getState().products.map(item => <ItemContainer key={item.title} setProperties={props.setProperties}
                                                                                               descriptionBrief={item.descriptionBrief}
                                                                                               tags={item.tags} srcSmall={item.srcSmall}
                                                                                               title={item.title} price={item.price} src={item.src}
                                                                                               colors={item.srcColors.map(x=>x.color)} materials={item.materials}
                                                                                               srcColors={item.srcColors} id={item.id} fullInfo={item.fullInfo}/>)



        useEffect(()=>{
            if(items.length>6){
                setPartialItems(items.slice(0,6))
            }else{
                setPartialItems(items)
            }
        },[items])

    const handleClick=()=>{
        if(!clicked) {
            setPartialItems(items.length > 12 ? items.slice(0, 12) : items)
            setButtonText('View All')
            setClicked(true)
        }else{
            setHref('http://localhost:3000/view-all')

        }
    }
    const quickView=<QuickViewContainer properties={props.properties} type='quick-view'/>



    return <ProductsDisplay items={partialItems} handleClick={handleClick} buttonText={buttonText} href={href}/>
}