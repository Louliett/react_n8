import React,{useEffect,useState} from "react";
import {ViewAll} from '../Presentational/viewAll'
import {ItemContainer} from "./itemContainer";
import {QueryString} from 'query-string'
import {CSSTransition} from "react-transition-group";
const queryString = require('query-string');
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK
//FIX RE-RENDERING SIDEBAR ON COLOR/MATERIAL CLICK

export const ViewAllContainer=()=>{
    const [defaultItems, setDefaultItems] = useState([])
    const [items, setItems] = useState([])
    const [visible, setVisible] = useState('not-visible')
    const [iconFill, setIconFill] = useState('#cccccc')
    const [sorting, setSorting] = useState('Default Sorting')
    const [pagination, setPagination] = useState(['1'])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentPageItems, setCurrentPageItems] = useState([])
    const parsed = queryString.parse(document.location.search);
    const [uniqueColors, setUniqueColors] = useState([{none:'none'}])


    useEffect(()=> {
        if(parsed.s != undefined){
        fetch('http://localhost:3000/db/items_old.json')
            .then(res => res.json())
            .then((result) => {
                var resultItems=result['items']
                resultItems=resultItems.filter(item => {
                    if(item.title.includes(parsed.s) || item.materials.includes(parsed.s) || item.colors.includes(parsed.s) || item.tags.includes(parsed.s)){
                        return true
                    }
                    return false

                })
                setItems(resultItems.map(item=><ItemContainer descriptionBrief={item.descriptionBrief} tags={item.tags} srcSmall={item.srcSmall} colors={item.colors} title={item.title} price={item.price} src={item.src} time={item.timeadded} popularity={item.popularity} materials={item.materials}/>));
                setDefaultItems(resultItems.map(item=><ItemContainer descriptionBrief={item.descriptionBrief} tags={item.tags} srcSmall={item.srcSmall} colors={item.colors} title={item.title} price={item.price} src={item.src} time={item.timeadded} popularity={item.popularity} materials={item.materials}/>));
            }, (error) => {
                setItems({error: 'error'})
                setDefaultItems({error: 'error'})
            })
        }else{
            fetch('http://localhost:3000/db/items_old.json')
                .then(res => res.json())
                .then((result) => {
                    setItems(result['items'].map(item=><ItemContainer descriptionBrief={item.descriptionBrief} tags={item.tags} srcSmall={item.srcSmall} colors={item.colors} title={item.title} price={item.price} src={item.src} time={item.timeadded} popularity={item.popularity} materials={item.materials}/>));
                    setDefaultItems(result['items'].map(item=><ItemContainer descriptionBrief={item.descriptionBrief} tags={item.tags} srcSmall={item.srcSmall} colors={item.colors} title={item.title} price={item.price} src={item.src} time={item.timeadded} popularity={item.popularity} materials={item.materials}/>));
                }, (error) => {
                    setItems({error: 'error'})
                    setDefaultItems({error: 'error'})
                })
        }
    },[])

    useEffect(()=>{
        var numberPages=Math.ceil(items.length/9)
        var pagesArray=Array.from(Array(numberPages).keys(), x => x + 1)
        var pages=pagesArray.map(number => number===currentPage ? <li><a aria-current="page" className="page-numbers current">{number}</a></li> : <li onClick={handlePaginationClick} data-number={number}><a aria-current="page" className="page-numbers" style={{userSelect:'none', pointerEvents:'none'}}>{number}</a></li>)
        if(pages.length>1){
            pages.push(<li><a className='nextPage'> > </a></li>)
        }
        setPagination(pages)
        findUniqieColors()

    },[items, currentPage])

    useEffect(()=>{

    },[currentPage])

    useEffect(()=>{
        const high=currentPage*9
        const low=0+((currentPage-1)*9)
        setCurrentPageItems(items.slice(low,high))
    },[pagination])



    const handleSortingClick=(e)=>{
        setSorting(e.target.dataset.type)
        setVisible('not-visible')
        if(e.target.dataset.type==='Default Sorting') {
            setItems([...defaultItems])
        }else if(e.target.dataset.type==='Price: high to low'){
            setCurrentPageItems(items.sort(function (a, b) {
                return b.props.price - a.props.price
            }));
        }else if(e.target.dataset.type==='Price: low to high'){
            setCurrentPageItems(items.sort(function (a, b) {
                return a.props.price - b.props.price
            }));
        }else if(e.target.dataset.type==='Sort by latest'){
            setCurrentPageItems(items.sort(function (a, b) {
                return b.props.time - a.props.time
            }));
        }else if(e.target.dataset.type==='Sort by Popularity'){
            setCurrentPageItems(items.sort(function (a, b) {
                return b.props.popularity - a.props.popularity
            }));
        }else{
            setItems([...defaultItems])
        }
    }

    const handlePaginationClick=(e)=>{
        try {
            setCurrentPage(parseInt(e.target.dataset.number))
        }catch (error){
            console.log(error)
        }
    }



    const handleSelectClick=()=>{
        if(visible==='not-visible') {
            setVisible('visible')
            setIconFill('#211f1f')
        }else{
            setVisible('not-visible')
            setIconFill('#cccccc')
        }

    }

    const handleColorClick=(e)=>{
        setItems(defaultItems.filter(item => item.props.colors.includes(e.target.childNodes[0].childNodes[0].data)))
        setCurrentPage(1)
    }
    const handleMaterialClick=(e)=>{
        setItems(defaultItems.filter(item => item.props.materials.includes(e.target.childNodes[0].childNodes[0].data)))
        setCurrentPage(1)
    }
    const handleFilterClick=(value)=>{
        setItems(defaultItems.filter(item => item.props.price>=value[0] && item.props.price<=value[1]))

    }
    const handleSearchClick=(value)=>{
        setItems(defaultItems.filter(item => item.props.title.includes(value)))

    }


    const findUniqieColors=()=>{

    }



    return <ViewAll allItems={defaultItems} items={currentPageItems} handleSelectClick={handleSelectClick} visible={visible} iconFill={iconFill} sorting={sorting} handleSortingClick={handleSortingClick} handleColorClick={handleColorClick} handleMaterialClick={handleMaterialClick} handleFilterClick={handleFilterClick} handleSearchClick={handleSearchClick} pagination={pagination} currentPage={currentPage} itmesLength={items.length} bannerTitle={parsed}/>
}
