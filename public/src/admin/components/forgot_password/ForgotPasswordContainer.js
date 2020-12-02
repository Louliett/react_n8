import React, { useState, useEffect } from 'react';
import { ForgotFormContainer } from './ForgotFormContainer';
import { EmailSentContainer } from './EmailSentContainer';

export function ForgotPasswordContainer() {

    const [access, setAccess] = useState(false);
    const [message, setMessage] = useState('');
    const [activeComponent, setActiveComponent] = useState(
    <ForgotFormContainer 
        setAccess={setAccess} 
        setMessage={setMessage}
    />
    
    );

    useEffect(() => {
        console.log(access, 'access');
        if (access) {
            console.log(message, 'the message');
            setActiveComponent(<EmailSentContainer message={message} />);
          }
    }, [access]);

    return (
        <div>
            {activeComponent}
        </div>
    );
}