import React from 'react';
import { UsersPagination } from './UsersPagination';

export function UsersPaginationContainer(props) {

    function handlePageChange(event, data) {
        console.log(data.activePage, ' ze page');
        props.setCurrentPage(data.activePage);
    }

    return (
        <UsersPagination
            totalPages={props.totalPages}
            onPageChange={handlePageChange}
        />
    );
}