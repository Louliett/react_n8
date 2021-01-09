import { useState, useEffect } from 'react';
import { UsersTable } from './UsersTable';
import { getUsersPerPage } from '../../services/user.service';
import { getAddressByUserId } from '../../services/address.service';


export function UsersTableContainer(props) {

    //const users_per_page = 10;
    //const [currentPage, setCurrentPage] = useState(1);
    //const [totalPages, setTotalPages] = useState(1);
    // const [users, setUsers] = useState([{
    //     first_name: "Loading...",
    //     last_name: "Loading...",
    //     email: "Loading...",
    //     registred: "Loading..."
    // }]);

    const searchMode = props.searchMode;
    const currentPage = props.currentPage;
    const trigger = props.triggerl;

    useEffect(() => {
        if (!searchMode) {
            getUsersPerPage(props.currentPage, props.users_per_page)
            .then((response) => {
                //the server returns an array with:
                //*total pages at index 0
                //*array of users per page at index 1
                props.setTotalPages(response[0]);
                props.setUsers(response[1]);
            }).catch(error => console.error(error));
        }

    }, [currentPage, trigger, props, searchMode]);

    function handleInspect(row) {
        getAddressByUserId(row.id)
            .then((response) => {
                props.setModalUserInfo(row);
                props.setModalAddressList(response)
                props.setShowModal(true);
            }).catch(error => console.error(error))
    }
    
    return (
        <UsersTable
            users={props.users}
            onInspect={handleInspect}
            setCurrentPage={props.setCurrentPage}
            totalPages={props.totalPages}
        />
    );
}