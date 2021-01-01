import React from 'react';
import { Pagination } from 'semantic-ui-react';

export function UsersPagination(props) {

    return(
        <Pagination
            totalPages={props.totalPages}
            onPageChange={props.onPageChange}
            firstItem={null}
            lastItem={null}
        />
    );
}