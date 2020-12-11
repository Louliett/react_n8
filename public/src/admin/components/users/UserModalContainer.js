import React from 'react';
import { UserModal } from './UserModal';
import { deleteUser } from '../../services/user.service';

export function UserModalContainer(props) {

    function handleDelete(userId) {
        deleteUser(userId)
        .then((response) => {
            console.log(response, ' on delete');
            props.setTrigger(Date.now());
            props.setShowModal(false);
        }).catch((error) => console.error(error));
    }

    function handleClose() {
        props.setShowModal(false);
        console.log(props.user);
    }

    return(
        <UserModal
            open={props.showModal}
            user={props.user}
            addresses={props.addresses}
            onDelete={handleDelete}
            onClose={handleClose}
        />
    );
}