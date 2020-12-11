import React from 'react';
import { HeaderContainer } from '../header/HeaderContainer';
import './home.css';


export function Home(props) {

    return (
        <div className="home">
            <HeaderContainer />
            <h1>welcome to admin!</h1>
        </div>
    );
}