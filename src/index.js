import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/header.css'
import './css/footer.css'
import './css/body.css'
import './css/products_display.css'
import './css/item.css'
import './css/screen_sizes.css'
import { Header_Container } from './Container/headerContainer'
import { Header_Container_Mobile } from './Container/headerMobileContainer'
import { Footer_Container } from './Container/footerContainer'
import { BodyContainer } from './Container/bodyContainer'

ReactDOM.render(
  <React.StrictMode>
    <Header_Container/>
    <Header_Container_Mobile/>
    <BodyContainer/>
    <Footer_Container/>
  </React.StrictMode>,
  document.getElementById('root')
);

