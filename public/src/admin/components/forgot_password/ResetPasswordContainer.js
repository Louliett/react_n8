import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { ResetPassword } from './ResetPassword';
import { validatePassword, passwordsMatch } from '../../services/validation.service';
import { resetPassword } from '../../services/pass.service';

export function ResetPasswordContainer(props) {

    const history = useHistory();
    const { match: {params} } = props;
    const userId = params.user_id;
    const [resetMessage, setResetMessage] = useState(null);
    const [newPassError, setNewPassError] = useState(null);
    const [confPassError, setConfPassError] = useState(null);
    const [inputs, setInputs] = useState({
        newPassword: '',
        confirmPassword: ''
    });

    function handleChange(event) {
        setInputs(inputs => ({
            ...inputs,
            [event.target.name]: event.target.value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        let new_pass_error = validatePassword(inputs.newPassword, true);
        let conf_pass_error = validatePassword(inputs.confirmPassword, true);
        let passMatch = passwordsMatch(inputs.newPassword, inputs.confirmPassword);

        console.log(new_pass_error, 'newpass');
        console.log(conf_pass_error, 'confpass');
        console.log(passMatch, 'match');


        if(new_pass_error === null && conf_pass_error === null && passMatch === true) {
            resetPassword(userId, inputs.newPassword)
            .then((response) => {
                console.log(response, 'ress');
                setResetMessage(response.message);
                history.push('/admin');
            })
            .catch((error) => {
                setResetMessage(error);
            });
        } else {
            setResetMessage(passMatch);
            setNewPassError(new_pass_error);
            setConfPassError(conf_pass_error);
        }

    }

    return (
        <ResetPassword
            resetMessage={resetMessage}
            newPassError={newPassError}
            confPassError={confPassError}
            inputs={inputs}
            onSubmit={handleSubmit} 
            onChange={handleChange}
        />
    );
}