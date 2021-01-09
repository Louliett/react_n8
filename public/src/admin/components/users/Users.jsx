import React from 'react';
import './users.css';
import { HeaderContainer } from '../header/HeaderContainer';
import { UserModalContainer } from './UserModalContainer';
import { UsersTableContainer } from './UsersTableContainer';
import { SearchBarContainer } from './SearchBarContainer';
import { Button } from 'semantic-ui-react';

//this is a parent component
export function Users(props) {

    return (
        <div className="users">
            <HeaderContainer />
            <h1>Users</h1>
            <Button onClick={props.addUser}>add user</Button>
            <br/>
            <SearchBarContainer
                setSearchMode={props.setSearchMode}
                setUsers={props.setUsers}
                setFocused={props.setFocused}
                setCurrentPage={props.setCurrentPage}
                setTotalPages={props.setTotalPages}
            />
            <UserModalContainer 
                showModal={props.showModal} 
                setShowModal={props.setShowModal}
                modalUserInfo={props.modalUserInfo}
                modalAddressList={props.modalAddressList} 
                setTrigger={props.setTrigger}
            />
            <UsersTableContainer 
                setShowModal={props.setShowModal}
                setModalUserInfo={props.setModalUserInfo}
                setModalAddressList={props.setModalAddressList}
                trigger={props.trigger}

                searchMode={props.searchMode}
                users={props.users}
                setUsers={props.setUsers}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
                totalPages={props.totalPages}
                setTotalPages={props.setTotalPages}
                users_per_page={props.users_per_page}
            />
        </div>
    );
}