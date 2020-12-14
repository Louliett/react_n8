import React,{useState,useEffect} from "react";
import {QuickView} from '../Presentational/quickView'
import {SortingContainer} from "./sortingContainer";
import {Loading} from "../Presentational/loading";
import {decode, encode} from "js-base64";
import {FullView} from "../Presentational/fullView";
const queryString = require('query-string');
let cookie = require('cookie');




export const QuickViewContainer=(props)=>{
    console.log('recreated?')
    const [showView, setShowView]=useState(false)
    const [properties, setProperties] =useState(props.properties)
    const [quantity, setQuantity] = useState(1)
    const [options, setOptions] = useState([['none'],['none']])
    const [selectComponents, setSelectComponents]=useState([<Loading/>,<Loading/>])
    const [selectedColor, setSelectedColor]=useState('none')
    const [title, setTitle]=useState('none')
    //for full view
    const parsed = queryString.parse(document.location.search);



        useEffect(()=>{
            },[parsed])

    useEffect(() => {
        console.log('rerendered')
        if(props.type==='quick-view') {

                    setShowView(props.properties.open)
                if (title != props.properties.title) {
                    setProperties(props.properties)
                    setOptions([props.properties.colors, props.properties.materials])
                    setSelectedColor(props.properties.colors[0])
                    setTitle(props.properties.title)
                }
        }else if(props.type==='full-view') {

                    if(parsed.info != undefined) {
                        let info=sessionStorage.getItem(parsed.info);
                        info=decode(info)
                        info=JSON.parse(info)
                        setOptions([info.colors, info.materials])
                        setSelectedColor(info.colors[0])
                        setTitle(info.title)
                        setProperties(info)
                    }
                }
            },[title])


    const handleCloseClick=()=>{
        setShowView(false)
    }
    const handleHover=(e)=>{
        //let position={'transform-origin': ((e.pageX - e.target.offsetLeft) / e.target.clientWidth) * 100 + 'px ' + ((e.pageY - e.target.offsetTop) / e.target.clientHeight) * 100 +'px'}
        let position={
            'top': e.clientY*-1 + 'px ',
            'left': e.clientX*-1 +'px'
        }
        e.target.setAttribute('style','top:'+position['top']+';left:'+position["left"]+';opacity: 1;')


    }
    const handleHoverEnter=(e)=>{
        e.target.setAttribute('style','opacity: 1;')
    }
    const handleHoverExit=(e)=>{
        e.target.setAttribute('style','opacity: 0;')

    }
    const switchImage=(e)=>{
            let srcsmall=[...properties.srcColors.find(x=>x.color===selectedColor).images]
            srcsmall[srcsmall.indexOf(e.target.getAttribute('src'))]=properties.src
            setProperties({...properties, src: e.target.getAttribute('src'), srcColor: [...srcsmall]})
    }

    const handleQuantityPlus=()=>{
        setQuantity(quantity+1)
    }
    const handleQuantityMinus=()=>{
        setQuantity(quantity-1)

    }
    const handleSortingColorClick=(e)=>{
            ColorSelect(e.target.dataset.type, props.properties.srcColors.find(x => x.color === e.target.dataset.type).images[0])

    }
    const handleSortingMaterialClick=()=>{

    }
    const handleViewFullClick=()=>{
        let jsonObj={...properties}
        jsonObj=JSON.stringify(jsonObj)
        let info=encode(jsonObj)
        sessionStorage.setItem(properties.id, info);
        window.location.href='http://localhost:3000/product?info='+properties.id

    }
    useEffect(()=>{
            let firstColor = options[0][0]
            let firstSrc = props.properties.srcColors[0].images[0]
            setSelectedColor(firstColor)
            setSelectComponents([<SortingContainer handleSortingClick={handleSortingColorClick} options={options[0]}/>,
                <SortingContainer handleSortingClick={handleSortingMaterialClick} options={options[1]}/>])
            ColorSelect(firstColor, firstSrc)




        },[title])

    const ColorSelect=(color,src)=>{
        setSelectedColor(options[0].find(x=> x===color))
        let srcColors = [...properties.srcColors]
        setProperties({...properties, src: src, srcColors: [...srcColors]})



    }


    if(props.type=='full-view'){

        return (<FullView
            fullInfo={properties.fullInfo}
            properties={properties}
            showView={showView}
            handleHover={handleHover}
            handleHoverExit={handleHoverExit}
            handleHoverEnter={handleHoverEnter}
            switchImage={switchImage}
            handleQuantityPlus={handleQuantityPlus}
            handleQuantityMinus={handleQuantityMinus}
            quantity={quantity}
            colorSelect={selectComponents[0]}
            materialSelect={selectComponents[1]}
            selectedColor={selectedColor}
            options={options}
        />)

  }else{


        return (<QuickView
            properties={properties}
            showView={showView}
            handleCloseClick={handleCloseClick}
            handleHover={handleHover}
            handleHoverExit={handleHoverExit}
            handleHoverEnter={handleHoverEnter}
            switchImage={switchImage}
            handleQuantityPlus={handleQuantityPlus}
            handleQuantityMinus={handleQuantityMinus}
            quantity={quantity}
            colorSelect={selectComponents[0]}
            materialSelect={selectComponents[1]}
            selectedColor={selectedColor}
            options={options}
            handleViewFullClick={handleViewFullClick}
        />)
    }
}

