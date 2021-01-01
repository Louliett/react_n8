import React, { useState } from 'react';
import { Users } from './Users';
import { UserModalContainer } from './UserModalContainer';
import { getAllUsers } from '../../services/user.service';

export function UsersContainer() {

    //preparing for search bar

    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState({
        id: "Loading..",
        stripe_id: "Loading..",
        first_name: "Loading..",
        last_name: "Loading..",
        email: "Loading..",
        password: "Loading.."
    });
    const [addresses, setAddresses] = useState([]);

    const [trigger, setTrigger] = useState('');

    //temporary
    function addUser() {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };
        fetch("http://localhost:8080/users/generate-user", requestOptions)
        .then((response) => {
            response.text()
            setTrigger(Date.now());
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return (
        <Users 
            showModal={showModal}
            setShowModal={setShowModal}
            user={user}
            setUser={setUser}
            addresses={addresses}
            setAddresses={setAddresses}
            addUser={addUser}
            trigger={trigger}
            setTrigger={setTrigger}
        />
    );
}