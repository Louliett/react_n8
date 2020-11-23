import React,{useState,useEffect} from "react";
import {QuickView} from '../Presentational/quickView'


export const QuickViewContainer=(props)=>{
    console.log(props, 'just fucking die')
    const [showView, setShowView]=useState(false)
    const [properties, setProperties] =useState(props.properties)
    const [quantity, setQuantity] = useState(1)
    useEffect(()=>{
        setShowView(props.properties.open)
        setProperties(props.properties)

    },[props.properties])


    const handleCloseClick=()=>{
        console.log(showView, props.properties.open)
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
        console.log(e.target.style)
        e.target.setAttribute('style','opacity: 1;')
    }
    const handleHoverExit=(e)=>{
        e.target.setAttribute('style','opacity: 0;')

    }
    const switchImage=(e)=>{
        var srcsmall=[...properties.srcSmall]
        srcsmall[srcsmall.indexOf(e.target.getAttribute('src'))]=properties.src
        setProperties({...properties,src:e.target.getAttribute('src'), srcSmall:[...srcsmall]})
    }

    const handleQuantityPlus=()=>{
        setQuantity(quantity+1)
    }
    const handleQuantityMinus=()=>{
        setQuantity(quantity-1)

    }


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
    />)
}

