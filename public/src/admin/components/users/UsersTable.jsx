import React from 'react';
import './user-table.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Table, Menu } from 'semantic-ui-react';
import { UsersPaginationContainer } from './UsersPaginationContainer';

export function UsersTable(props) {

    return (
        <div className="user_table">
            <Table striped className="user_table">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                
                <Table.Body>
                    {(props.users).map((user, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell>{user.first_name}</Table.Cell>
                                <Table.Cell>{user.last_name}</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => {props.onInspect(user)}}>Inspect</Button>
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <UsersPaginationContainer 
                                    totalPages={props.totalPages}
                                    setCurrentPage={props.setCurrentPage}
                                />
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    );
}