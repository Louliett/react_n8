import React from 'react';
import './users.css';
import { HeaderContainer } from '../header/HeaderContainer';
import { UserModalContainer } from './UserModalContainer';
import { UsersTableContainer } from './UsersTableContainer';
import { Button } from 'semantic-ui-react';

export function Users(props) {

    return (
        <div className="users">
            <HeaderContainer />
            <h1>Users</h1>
            <Button onClick={props.addUser}>add user</Button>
            <UserModalContainer 
                showModal={props.showModal} 
                setShowModal={props.setShowModal}
                user={props.user}
                addresses={props.addresses} 
                setTrigger={props.setTrigger}
            />
            <UsersTableContainer 
                setShowModal={props.setShowModal}
                setUser={props.setUser}
                setAddresses={props.setAddresses}
                trigger={props.trigger}
            />
        </div>
    );
}