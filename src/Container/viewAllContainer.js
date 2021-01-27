import React,{useEffect,useState} from "react";
import {ViewAll} from '../Presentational/viewAll'
import {ItemContainer} from "./itemContainer";
import {QueryString} from 'query-string'
import {SortingContainer} from "./sortingContainer";
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
    const [pagination, setPagination] = useState(['1'])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentPageItems, setCurrentPageItems] = useState([])
    const parsed = queryString.parse(document.location.search);


    useEffect(()=> {
        if(parsed.s != undefined){
        /*fetch('http://localhost:3000/db/items_old.json')
            .then(res => res.json())
            .then((result) => {
                let resultItems=result['items']
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
            })*/
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
        let numberPages=Math.ceil(items.length/9)
        let pagesArray=Array.from(Array(numberPages).keys(), x => x + 1)
        let pages=pagesArray.map(number => number===currentPage ? <li><a aria-current="page" className="page-numbers current">{number}</a></li> : <li onClick={handlePaginationClick} data-number={number}><a aria-current="page" className="page-numbers" style={{userSelect:'none', pointerEvents:'none'}}>{number}</a></li>)
        if(pages.length>1){
            pages.push(<li><a className='nextPage'> > </a></li>)
        }
        setPagination(pages)
        findUniqieColors()

    },[items, currentPage])

    useEffect(()=>{

    },[currentPage])

    useEffect(()=>{
        if(items.length>9){
            const high=currentPage*9
            const low=((currentPage-1)*9)
            setCurrentPageItems(items.slice(low,high))
        }else{
            const high=items.length
            const low=1
            setCurrentPageItems(items)
        }
    },[pagination])

    useEffect(()=>{
        console.log('eat a dick react')
    },[currentPageItems])



    const handleSortingClick=(e)=>{

        //setSorting(e.target.dataset.type)
        //setVisible('not-visible')

        if(e.target.dataset.type==='Default Sorting') {
            console.log(e.target.dataset,'1')
            setItems([...defaultItems])
        }else if(e.target.dataset.type==='Price: high to low'){
            console.log(e.target.dataset,'2')
            setItems([...defaultItems.sort(function (a, b) {
                return b.props.price - a.props.price
            })]);
        }else if(e.target.dataset.type==='Price: low to high'){
            console.log(e.target.dataset,'3')
            setItems([...defaultItems.sort(function (a, b) {
                return a.props.price - b.props.price
            })]);
        }else if(e.target.dataset.type==='Sort by latest'){
            console.log(e.target.dataset,'4')
            setItems([...defaultItems.sort(function (a, b) {
                return b.props.time - a.props.time
            })]);
        }else if(e.target.dataset.type==='Sort by Popularity'){
            console.log(e.target.dataset,'5')
            setItems([...defaultItems.sort(function (a, b) {
                return b.props.popularity - a.props.popularity
            })]);
        }else{
            console.log(e.target.dataset,'6')
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
        return

    }
    const selectMenu=<SortingContainer handleSortingClick={handleSortingClick} options={['Default Sorting','Sort by Popularity','Sort by latest','Price: low to high','Price: high to low']}/>


    return <ViewAll allItems={defaultItems} items={currentPageItems} handleColorClick={handleColorClick} handleMaterialClick={handleMaterialClick} handleFilterClick={handleFilterClick} handleSearchClick={handleSearchClick} pagination={pagination} currentPage={currentPage} itmesLength={items.length} bannerTitle={parsed} selectMenu={selectMenu}/>
}
