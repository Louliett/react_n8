import React from 'react';
import { useHistory } from 'react-router-dom';
import { EmailSent } from './EmailSent';

export function EmailSentContainer(props) {

    const history = useHistory();
    //const message = "An email with instructions has been sent to you.";


    function handleClick() {
        history.push('/admin');
    }

    return (
        <EmailSent 
            message={props.message}
            onClick={handleClick} 
        />
    );
}