import { useState, useEffect } from 'react';
import { UsersTable } from './UsersTable';
import { getAllUsers } from '../../services/user.service';
import { getAddressByUserId } from '../../services/address.service';


export function UsersTableContainer(props) {

    const [users, setUsers] = useState([{
        first_name: "Loading...",
        last_name: "Loading...",
        email: "Loading..."
    }]);
    
    useEffect(() => {
        getAllUsers()
            .then((response) => {
                setUsers(response);
            }).catch(error => console.error(error))
    }, [props.trigger]);

    function handleInspect(row) {
        getAddressByUserId(row.id)
            .then((response) => {
                props.setUser(row);
                props.setAddresses(response)
                props.setShowModal(true);
            }).catch(error => console.error(error))
    }
    
    return (
        <UsersTable 
            users={users}
            onInspect={handleInspect}
            
        />
    );
}