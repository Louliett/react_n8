import React,{useState,useEffect} from "react";
import {QuickView} from '../Presentational/quickView'
import {SortingContainer} from "./sortingContainer";
import {Loading} from "../Presentational/loading";
import {decode, encode} from "js-base64";
import {FullView} from "../Presentational/fullView";
import { useSelector, useDispatch } from 'react-redux';
import {
    closeModal,
    setSrcImages,
    colorSelect,
    selectProduct,
    showModalExport,
} from '../reducer/n8Slice';
import { useHistory } from "react-router-dom";
const queryString = require('query-string');
let cookie = require('cookie');





export const QuickViewContainer=(props)=>{
    const selectedProduct = useSelector(selectProduct);
    const showModal = useSelector(showModalExport);
    const dispatch = useDispatch();
    let properties=selectedProduct
    console.log('rerender quickViewContainer')
    let history = useHistory();

    /*

    const properties = props.properties
    console.log('rerender quickViewContainer', props)   /*
    const [quantity, setQuantity] = useState(1)
    const [selectedColor, setSelectedColor]=useState('none')

    //for full view
    */
    //const quantity=0
    let options=[properties.colors,properties.materials]
    let selectedColor=options[0][0]
    //let images={src: 'http://localhost:3000/images/loader_backinout.gif', srcColors: [{color: 'none', images:['http://localhost:3000/images/loader_backinout.gif']}]}
    //const setQuantity=()=>{}
    const setSelectedColor=()=>{}
    //const setImages=()=>{}
    const parsed = queryString.parse(document.location.search);


    let selectComponents=[<Loading/>,<Loading/>]
    //let firstColor = selectedColor
    //let firstSrc = properties.srcColors[0].images[0]


    /*if(props.type==='full-view'){
        if(parsed.info != undefined) {
            let info=sessionStorage.getItem(parsed.info);
            info=decode(info)
            info=JSON.parse(info)

        }
    }*/
    options=([properties.colors, properties.materials])
    let images={src:properties.src, srcColors: properties.srcColors}
    let quantity=0








    const handleCloseClick=()=>{
        dispatch(closeModal())
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
        const clickedSrc=e.target.getAttribute('src')
        let srcsmall=images.srcColors.find(x=>x.color===selectedColor)
        let srcimages=srcsmall.images
        srcimages=srcimages.map(image=>{
            if(image===clickedSrc){
                image=images.src
                return image
            }
            return image
        })
        srcsmall={color:srcsmall.color, images:srcimages}
        const allImages=images.srcColors.map(image=>{
            if(image.color===selectedColor){
                return srcsmall
            }
            return image
        })

        srcsmall={src:clickedSrc, images:allImages}

        dispatch(setSrcImages(srcsmall))
    }

    const handleQuantityPlus=()=>{
        quantity=quantity+1
    }
    const handleQuantityMinus=()=>{
        quantity=quantity-1

    }

    const handleSortingMaterialClick=()=>{

    }


    const handleViewFullClick=()=>{
        let jsonObj={...properties}
        jsonObj=JSON.stringify(jsonObj)
        let info=encode(jsonObj)
        sessionStorage.setItem(properties.id, info);
        //window.location.href='http://localhost:3000/product?info='+properties.id
        history.push('/product?info='+properties.id);

    }
    const handleSortingColorClick=(e)=>{
        let color=e.target.dataset.type
        console.log(images,color,e.target,properties,'fuck')
        ColorSelect(color, images.srcColors.find(x => x.color === color).images[0])

    }

    const ColorSelect=(color,src)=>{
        selectedColor=color
        let srcColors = images.srcColors
        images={src: src, srcColors: srcColors}
        dispatch(colorSelect(color))



    }

    selectComponents=([<SortingContainer handleSortingClick={handleSortingColorClick} options={options[0]}/>,
        <SortingContainer handleSortingClick={handleSortingMaterialClick} options={options[1]}/>])



    if(props.type==='full-view'){

        return (<FullView
            images={images}
            properties={properties}
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
        />)

  }else if(props.type==='quick-view'){


        return (<QuickView
            images={images}
            properties={properties}
            showView={showModal}
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
    }else{
        return <Loading/>
    }
}

