import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './user-modal.css'

export function UserModal (props) {
    return(
        <Modal open={props.open}>
            <Modal.Header>
                {props.modalUserInfo.first_name + ' ' + props.modalUserInfo.last_name + ' | ' + props.modalUserInfo.email} 
            </Modal.Header>
            <Modal.Description>
                <ul>
                    {(props.modalAddressList).map((address, index) => {
                        return (
                            <li key={index}>
                                <p>
                                    {
                                    address.name + ' ' + address.second_name + '\n' +
                                    address.postcode + ' ' + address.city + '\n' +
                                    address.phone_number + '\n' + 
                                    address.shipping
                                    }
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </Modal.Description>
            <Modal.Actions>
                <Button color="red" onClick={() => {props.onDelete(props.modalUserInfo.id)}}>Delete</Button>
                <Button color="blue" onClick={props.onClose}>Close</Button>
            </Modal.Actions>
        </Modal>
    );
}