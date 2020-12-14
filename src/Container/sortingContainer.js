import React,{useState, useEffect} from "react";
import {Sorting} from '../Presentational/sorting'


//implementing component needs its own implementation of handleSortingClick to dictate the logic
//implementing component must provide the options as well
export const SortingContainer=(props)=>{
    const [options, setOptions] = useState(['none'])
    const [sorting, setSorting] = useState(['Default'])
    const [visible, setVisible] = useState(['not-visible','#cccccc'])

    useEffect(()=>{
        if(props.options) {
            setOptions(props.options)
            setSorting(props.options[0])
        }
    },[props.options])


    const handleMenuClick=()=>{
            if(visible[0]==='not-visible') {
                setVisible(['visible', '#211f1f'])
            }else{
                setVisible(['not-visible','#cccccc'])
            }
    }
    const handleSortingClickLocal=(e)=>{
        setSorting(e.target.dataset.type)
        setVisible(['not-visible','#cccccc'])

        props.handleSortingClick(e)
    }

    return <Sorting options={options} visible={visible} handleMenuClick={handleMenuClick} sorting={sorting} handleSortingClick={handleSortingClickLocal}/>
}
