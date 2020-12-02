import React from 'react';

import '../css/index.css';
import '../css/header.css'
import '../css/footer.css'
import '../css/body.css'
import '../css/products_display.css'
import '../css/item.css'
import '../css/screen_sizes.css'
import { Header_Container } from '../containers/headerContainer'
import { Header_Container_Mobile } from '../containers/headerMobileContainer'
import { Footer_Container } from '../containers/footerContainer'
import { BodyContainer } from '../containers/bodyContainer'


export function Home() {

    return (
        <div className="home">
            <Header_Container />
            <Header_Container_Mobile />
            <BodyContainer />
            <Footer_Container />
        </div>
    );
}