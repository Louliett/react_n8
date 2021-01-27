import { createSlice } from '@reduxjs/toolkit';



const defaultSelectedProduct={

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

    },
    quantity:0,
    selectedColor:'none'
}


export const n8Slice = createSlice({
    name: 'n8app',
    initialState: {
        products: [],
        selectedProduct: defaultSelectedProduct,
        showModal: 'false',
        cart:[],
        user:{},
        favorites:[],
        categories:[],
        displayedProducts:[]
    },
    reducers: {
        selectProductReducer: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            console.log(action,'fuk off')
            state.selectedProduct=state.displayedProducts.find(item => item.id === action.payload)
            state.showModal='true'
        },
        closeModal: state => {
            state.showModal='false';
        },
        loadProducts: (state, action) => {
            state.products = action.payload;
        },
        displayPageProducts: (state, action)=>{
            if(action.payload.length>6) {
                state.displayedProducts = action.payload.slice(0,6)
            }else if(action.payload.length>12){
                state.displayedProducts = action.payload.slice(0,12)
            }else{
                state.displayedProducts = action.payload

            }
        },
        setSrcImages:(state, action)=>{
            state.selectedProduct.srcColors=action.payload.images
            state.selectedProduct.src=action.payload.src
        },
        colorSelect:(state, action)=>{
            state.selectedProduct.selectedColor=action.payload.selectedColor
        }
    },
});

export const { selectProductReducer, closeModal, loadProducts, displayPageProducts, setSrcImages, colorSelect } = n8Slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync())`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const loadProductsAsync = params => dispatch => {
    console.log(params)


        fetch('http://localhost:3000/db/items_old.json')
            .then(res => res.json())
            .then((result) => {
                dispatch(loadProducts(result['items']));
                dispatch(displayPageProducts(result['items']));

            }, (error) => {
                console.log('error fetching items',error)
            })

};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProduct = state => state.n8app.selectedProduct;
export const productsExport = state => state.n8app.products;
export const productsOnPageExport = state => state.n8app.displayedProducts;
export const showModalExport = state => state.n8app.showModal;

export default n8Slice.reducer;
