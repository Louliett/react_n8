import React,{useState, useEffect} from "react";
import {Sorting} from '../Presentational/sorting'


//implementing component needs its own implementation of handleSortingClick to dictate the logic
//implementing component must provide the options as well
export const SortingContainer=(props)=>{
    const [options, setOptions] = useState(['none'])
    const [visible, setVisible] = useState(['not-visible','#cccccc'])
    let jsxListItems=options.map(item=><li onClick={props.handleSortingClick} data-type={item}>{item}</li>)
    let jsxOptions=options.map(item=><option value={item}>{item}</option>)

    useEffect(()=>{
        setOptions(props.options)
    },[props.options])

    useEffect(()=>{
        jsxListItems=options.map(item=><li onClick={props.handleSortingClick} data-type={item}>{item}</li>)
        jsxOptions=options.map(item=><option value={item}>{item}</option>)
    },[options])

    const handleMenuClick=()=>{
            if(visible==='not-visible') {
                setVisible('visible', '#211f1f')
            }else{
                setVisible('not-visible','#cccccc')
            }
    }

    return <Sorting jsxListItems={jsxListItems} jsxOptions={jsxOptions} visible={visible} handleMenuClick={handleMenuClick}/>
}
