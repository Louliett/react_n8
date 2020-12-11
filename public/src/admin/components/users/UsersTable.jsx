import React from 'react';
import './user-table.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Table } from 'semantic-ui-react';

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
            </Table>
        </div>
    );
}