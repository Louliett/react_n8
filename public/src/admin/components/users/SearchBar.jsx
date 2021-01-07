import React from 'react';
import { Search, Grid, Header, Segment } from 'semantic-ui-react';

export function SearchBar(props) {

    return(
        <Grid>
            <Grid.Column width={6}>
                <Search
                    loading={props.loading}
                    // onResultSelect={(e, data) =>
                    //   dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
                    // }
                    onSearchChange={props.onSearchChange}
                    //results={props.results}
                    value={props.value}
                />
            </Grid.Column>
      </Grid>
    )
}

