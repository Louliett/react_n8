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
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'))


