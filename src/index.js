import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import './css/body.css'
import './css/header.css'
import './css/footer.css'
import './css/products_display.css'
import './css/item.css'
import './css/screen_sizes.css'
import './css/all.css'
import {App} from './app'
import {store} from '../src/reducer/reducers'






    const render=()=>{ReactDOM.render(
            <App />,
        document.getElementById('root')
    )}
store.subscribe(render)
render()//render initial state
console.log(store.getState(),'what fucking state')

