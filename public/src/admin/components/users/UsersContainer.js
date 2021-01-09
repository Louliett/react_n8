import React, { useState } from 'react';
import { Users } from './Users';

//this is a parent component
export function UsersContainer() {

    //user modal--------------------------------------
    const [showModal, setShowModal] = useState(false);
    const [modalUserInfo, setModalUserInfo] = useState({
        id: "Loading..",
        stripe_id: "Loading..",
        first_name: "Loading..",
        last_name: "Loading..",
        email: "Loading..",
        password: "Loading.."
    });
    const [modalAddressList, setModalAddressList] = useState([]);
    const [trigger, setTrigger] = useState('');
    //----------------------------------------------------

    //user table ------------------------------------------
    const users_per_page = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [users, setUsers] = useState([{
        first_name: "Loading...",
        last_name: "Loading...",
        email: "Loading...",
        registred: "Loading..."
    }]);
    //-----------------------------------------------------

    //user search bar -------------------------------------
    const [searchMode, setSearchMode] = useState(false);
    //----------------------------------------------------



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
            modalUserInfo={modalUserInfo}
            setModalUserInfo={setModalUserInfo}
            modalAddressList={modalAddressList}
            setModalAddressList={setModalAddressList}
            addUser={addUser}
            trigger={trigger}
            setTrigger={setTrigger}

            searchMode={searchMode}
            setSearchMode={setSearchMode}
            users={users}
            setUsers={setUsers}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            setTotalPages={setTotalPages}
            users_per_page={users_per_page}
        />
    );
}