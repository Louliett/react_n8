import React, { useState } from 'react';
import { Login } from './Login.jsx';
import { useHistory } from 'react-router-dom';
import { login, setCurrentUser, setAuthenticated } from '../../services/auth.service';
import { validateEmail, validatePassword } from '../../services/validation.service';
import n8Icon from '../../resources/n8.svg';


export function LoginContainer() {

    const history = useHistory();
    const [loginMessage, setLoginMessage] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passError, setPassError] = useState(null);
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    function handleChange(event) {
        //if ((event.target.value).length !== 0) {
            setInputs(inputs => ({
                ...inputs,
                [event.target.name]: event.target.value
            }));
        //}
    }

    function handleSubmit(event) {
        event.preventDefault();
        let email_error = validateEmail(inputs.email);
        let pass_error = validatePassword(inputs.password, false);

        console.log(email_error, "email");
        console.log(pass_error, "pass");

        //if there are not email or password format error
        //proceed on checking if such email and password exists
        if(email_error === null && pass_error === null) {

            login(inputs)
            .then((user) => { 
                if (user.exists) {
                    setAuthenticated(true);
                    setCurrentUser(user.info);
                    history.push('/admin/home');
                } else {
                    setLoginMessage("Incorrect email or password.");
                }
            })
            .catch((error) => {
                console.error(error);
                setLoginMessage('server error', error);
            });
        //if there are email or password format error
        //display that to the user
        } else {
            setEmailError(email_error);
            setPassError(pass_error);
        }

    }

    return ( 
        <Login
            loginMessage={loginMessage}
            emailError={emailError}
            passError={passError}
            inputs={inputs} 
            icon={n8Icon}
            onSubmit={handleSubmit} 
            onChange={handleChange}
        />
    );

}