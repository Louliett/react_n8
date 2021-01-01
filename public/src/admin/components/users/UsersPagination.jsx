import React from 'react';
import { Pagination } from 'semantic-ui-react';

export function UsersPagination(props) {

    return(
        <Pagination 
            //defaultActivePage={props.defaultActivePage}
            //activePage={props.activePage}
            totalPages={props.totalPages}
            onPageChange={props.onPageChange}
            firstItem={null}
            lastItem={null}
        />
    );
}