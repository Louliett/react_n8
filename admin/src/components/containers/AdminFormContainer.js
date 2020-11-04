import React, { useState } from 'react';
import { AdminForm } from '../representational/AdminForm.jsx'

export function AdminFormContainer(props) {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    function handleChange(event) {
        console.log((event.target.value).length, "length");
        if ((event.target.value).length !== 0) {
            setInputs(inputs => ({
                ...inputs,
                [event.target.name]: event.target.value
            }));
        }

    }

    function handleSubmit(event) {
        event.preventDefault();
        fetchUser(inputs)
            .then((user) => {
                console.log(user.exists);
                if (user.exists) {
                    props.setAccess(true);
                }
            });
    }

    async function fetchUser(user) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(user);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let response = await fetch("http://localhost:8080/users/login", requestOptions);
        let message = await response.json();
        return message;
    }

    return ( 
        <AdminForm inputs={inputs} onSubmit={handleSubmit} onChange={handleChange} />
    );

}