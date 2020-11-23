import React,{useEffect,useState} from 'react'
import {ProductsDisplay} from '../Presentational/productsDisplay'
import {ItemContainer} from "./itemContainer";


export const ProductsDisplayContainer=(props)=>{
    const [items, setItems]=useState([<span>loading</span>]) //gonna put a loading component here
    const [partialItems, setPartialItems]=useState([<span>loading</span>])
    const [buttonText, setButtonText]=useState('View More')
    const [clicked, setClicked]=useState(false)
    const [href, setHref]=useState('javascript:void(0);')

    useEffect(()=> {
            fetch('http://localhost:3000/db/items_old.json')
                .then(res => res.json())
                .then((result) => {
                    setItems(result['items'].map(item=><ItemContainer setProperties={props.setProperties} descriptionBrief={item.descriptionBrief} tags={item.tags} srcSmall={item.srcSmall} title={item.title} price={item.price} src={item.src}/>));
                }, (error) => {
                    setItems({error: 'error'})
                })
        },[])

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
            console.log('fuck off')
            setHref('http://localhost:3000/view-all')

        }
    }


    return <ProductsDisplay items={partialItems} handleClick={handleClick} buttonText={buttonText} href={href}/>
}