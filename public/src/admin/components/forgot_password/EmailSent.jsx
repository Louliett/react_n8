import React from 'react';
import './email-sent.css';

export function EmailSent (props) {

    return (
        <div className="email_sent">
            <span>{props.message}</span>
            <br/>
            <button onClick={props.onClick}>Login</button>
        </div>
    );
}