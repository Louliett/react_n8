import React,{useState,useEffect} from "react";
import {Sidebar} from '../Presentational/sidebar'
import {ItemContainer} from "./itemContainer";



export const SidebarContainer=(props)=>{
    const [colors, setColors]=useState([])
    const [materials, setMaterials]=useState([])
    const [search, setSearch]=useState('')
    const [priceRange, setPriceRange]=useState([0,0])

    useEffect(()=> {
        findUnique(props.allItems)
        findUnique2(props.allItems)
        findPriceRange(props.allItems)
    },[props.allItems])

    const handleSearchChange=(e)=>{
        setSearch(e.target.value)
    }
    const handleSearchClick=(e)=>{
        props.handleSearchClick(search)
    }
    //HAVE TO REMOVE LOOPS
    //HAVE TO REMOVE LOOPS
    //HAVE TO REMOVE LOOPS
    //HAVE TO REMOVE LOOPS
    //HAVE TO REMOVE LOOPS
    const findUnique=(items)=>{
        var uniqueColors=[]
        for (var i=0; i<items.length; i++){
            for(var q=0; q<items[i].props.colors.length; q++){
                if(uniqueColors.find(x => x.color === items[i].props.colors[q])!=undefined){
                    uniqueColors.find(x => x.color === items[i].props.colors[q]).number++

                }else{
                    uniqueColors.push({color:items[i].props.colors[q], number:1})
                }
            }
        }
        setColors(uniqueColors)

        //setColors(result['colors']);
        //setMaterials(result['materials']);
    }
    const findUnique2=(items)=>{
        var uniqueMaterials=[]
        for (var i=0; i<items.length; i++){
            for(var q=0; q<items[i].props.materials.length; q++){
                if(uniqueMaterials.find(x => x.material === items[i].props.materials[q])!=undefined){
                    uniqueMaterials.find(x => x.material === items[i].props.materials[q]).number++

                }else{
                    uniqueMaterials.push({material:items[i].props.materials[q], number:1})
                }
            }
        }
        setMaterials(uniqueMaterials)

        //setColors(result['colors']);
        //setMaterials(result['materials']);
    }
    const findPriceRange=(items)=>{
        setPriceRange([Math.min.apply(Math, items.map(function(o) { return Math.floor(o.props.price); })),Math.max.apply(Math, items.map(function(o) { return Math.ceil(o.props.price); }))])
    }



    return <Sidebar colors={colors} materials={materials} handleColorClick={props.handleColorClick} handleMaterialClick={props.handleMaterialClick} handleFilterClick={props.handleFilterClick} handleSearchChange={handleSearchChange} handleSearchClick={handleSearchClick} search={search} priceRange={priceRange}/>
}