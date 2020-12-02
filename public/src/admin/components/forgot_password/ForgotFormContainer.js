import React, { useState } from 'react';
import { ForgotForm } from './ForgotForm';
import { validateEmail } from '../../services/validation.service';
import n8Icon from '../../resources/n8.svg';
import { sendPassRequest } from '../../services/pass.service';

export function ForgotFormContainer (props) {
    
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [message, setMessage] = useState(null);

    
    function handleChange(event) {
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email, 'yeeee');
        let email_error = validateEmail(email);
        let human_error = null;

        //if there are no email format error
        //proceed on 
        if(email_error === null && human_error === null) {
            sendPassRequest(email)
            .then((response) => {
                console.log(response.message, 'response');
                props.setMessage(response.message);
                props.setAccess(true);
            });
        //if there is email format error
        //display that to the user
        } else {
            setEmailError(email_error);
            setMessage(human_error);
        }
    }
    
    return (
        <div>
            <ForgotForm
                message={message} 
                emailError={emailError} 
                email={email} 
                icon={n8Icon} 
                onSubmit={handleSubmit} 
                onChange={handleChange} />
        </div>
    );

}