import {createStore, combineReducers} from 'redux'

const productBlueprint={
    descriptionBrief:'I dont know why you are seeing this but you should not. Make sure to click away and forget about it.',
    tags:['none'],
    srcSmall:['https://cdn.dribbble.com/users/2285628/screenshots/10774525/media/a660ab310be9bed8b4e31e9c3d5dc736.png','https://cdn.dribbble.com/users/2285628/screenshots/10774525/media/a660ab310be9bed8b4e31e9c3d5dc736.png'],
    title: 'You should not be here',
    price:'404.00$',
    src:'https://cdn.dribbble.com/users/2285628/screenshots/10774525/media/a660ab310be9bed8b4e31e9c3d5dc736.png',
    open:'false',
    srcColors:[{color:'none',images:['http://localhost:3000/images/loader_backinout.gif'],
    },{color:'none',images:['http://localhost:3000/images/loader_backinout.gif'],
    }],
    colors:['none'],
    materials:['none'],
    id:'0',
    fullInfo:{
        descriptionLong: "Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?",
        dimentions: "20x40x50 CM",
        company:  "Whatever",
        designer: "YO mom",
        sku: "223",
        weight: "0.7kg"

    }
}

//selected product reducer
const selectedProduct=(state={productBlueprint}, action)=>{
    if(action.type==='LOAD_PRODUCT'){
        return {...action.payload}
    }else{
        return state
    }

}
const products=(state=[], action)=>{
    if(action.type==='LOAD_PRODUCTS'){
        return action.payload
    }else{
        return state
    }

}


//combined all reducers in single state
const n8App=combineReducers({selectedProduct:selectedProduct,products:products})


export const store = createStore(
    n8App, /* preloadedState, */
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

