import React, { useState } from 'react';
import { UsersPagination } from './UsersPagination';

export function UsersPaginationContainer(props) {

    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState();

    function handlePageChange() {
        console.log(page, ' ze page');
    }

    return (
        <UsersPagination
            activePage={page}
            totalPages={props.totalPages.length}
            onPageChange={handlePageChange}
        />
    );
}