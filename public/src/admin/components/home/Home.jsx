import React from 'react';
import './home.css';


export function Home(props) {

    return (
        <div className="home">
            <nav></nav>
            <h1>welcome to admin!</h1>
            <button onClick={props.onClick}>logout</button>
        </div>
    );
}