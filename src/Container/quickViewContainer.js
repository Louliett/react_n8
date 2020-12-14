import React,{useState,useEffect} from "react";
import {QuickView} from '../Presentational/quickView'
import {SortingContainer} from "./sortingContainer";
import {Loading} from "../Presentational/loading";
import {decode, encode} from "js-base64";
import {FullView} from "../Presentational/fullView";
import {store} from "../reducer/reducers";
const queryString = require('query-string');
let cookie = require('cookie');




export const QuickViewContainer=(props)=>{
    const properties = store.getState().selectedProduct
    console.log('rerender quickViewContainer', props)   /*
    const [quantity, setQuantity] = useState(1)
    const [selectedColor, setSelectedColor]=useState('none')

    //for full view
    */
    //const quantity=0
    let selectedColor='none'
    //let images={src: 'http://localhost:3000/images/loader_backinout.gif', srcColors: [{color: 'none', images:['http://localhost:3000/images/loader_backinout.gif']}]}
    //const setQuantity=()=>{}
    const setSelectedColor=()=>{}
    //const setImages=()=>{}
    const parsed = queryString.parse(document.location.search);


    let selectComponents=[<Loading/>,<Loading/>]
    //let firstColor = selectedColor
    //let firstSrc = properties.srcColors[0].images[0]
    let options=[properties.colors,properties.materials]


    if(props.type==='full-view'){
        if(parsed.info != undefined) {
            let info=sessionStorage.getItem(parsed.info);
            info=decode(info)
            info=JSON.parse(info)
            store.dispatch({type:'LOAD_PRODUCT', payload:info})

        }
    }
    options=([properties.colors, properties.materials])
    const [images, setImages]=useState({src:properties.src, srcColors: properties.srcColors})
    const [quantity, setQuantity]=useState(0)
    const [title, setTitle]=useState(properties.title)
    const [showView, setShowView]=useState(false)

    /*useEffect(()=>{
     setSelectedColor(options[0][0])
     setImages({src:infoFull.src, srcColors: infoFull.srcColors})

    },[])
*/
    useEffect(()=>{
        if(props.type==='quick-view'){
            setShowView(properties.open)
        }
    },[props.type])
    useEffect(()=>{console.log(showView)},[showView])





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
        //fix this we need to pass correct src to srcColors
        const clickedSrc=e.target.getAttribute('src')
        let srcsmall=images.srcColors.find(x=>x.color===selectedColor).images
        srcsmall[srcsmall.indexOf(clickedSrc)]=images.src
        setImages({src: clickedSrc, srcColors:images.srcColors})
    }

    const handleQuantityPlus=()=>{
        setQuantity(quantity+1)
    }
    const handleQuantityMinus=()=>{
        setQuantity(quantity-1)

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
    const handleSortingColorClick=(e)=>{
        ColorSelect(e.target.dataset.type, images.srcColors.find(x => x.color === e.target.dataset.type).images[0])

    }

    const ColorSelect=(color,src)=>{
        setSelectedColor(options[0].find(x=> x===color))
        let srcColors = [...images.srcColors]
        setImages({src: src, srcColors: [...srcColors]})



    }

    selectComponents=([<SortingContainer handleSortingClick={handleSortingColorClick} options={options[0]}/>,
        <SortingContainer handleSortingClick={handleSortingMaterialClick} options={options[1]}/>])



    if(props.type==='full-view'){

        return (<FullView
            images={images}
            fullInfo={properties.fullInfo}
            properties={properties}
            handleHover={handleHover}
            handleHoverExit={handleHoverExit}
            handleHoverEnter={handleHoverEnter}
            switchImage={switchImage}
            handleQuantityPlus={handleQuantityPlus}
            handleQuantityMinus={handleQuantityMinus}
            quantity={quantity}
            colorSelect={selectComponents[0]}
            materialSelect={selectComponents[1]}
            selectedColor={'selectedColor'}
            options={options}
        />)

  }else if(props.type==='quick-view'){


        return (<QuickView
            images={images}
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
            selectedColor={'none'}
            options={options}
            handleViewFullClick={handleViewFullClick}
        />)
    }else{
        return <Loading/>
    }
}

