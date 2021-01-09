import React from 'react';
import { Search, Grid } from 'semantic-ui-react';

export function SearchBar(props) {

    return(
        <Grid>
            <Grid.Column width={6}>
                <Search
                    //loading animation
                    loading={props.loading}
                    //controls wheter there is a dropdown menu for results
                    open={false}
                    onSearchChange={props.onSearchChange}
                    value={props.value}
                />
            </Grid.Column>
      </Grid>
    )
}

