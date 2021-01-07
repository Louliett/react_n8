import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { getUsersByKeyword } from '../../services/user.service';

export function SearchBarContainer() {
    //a search can show a loading indicator
    const [loading, setLoading] = useState(false);
    //array of search.
    const [results, setResults] = useState([]);
    //current value of the search input. Creates a controlled component.
    const [value, setValue] = useState('');

    function resetComponent() {
        setLoading(false);
        setResults([]);
        setValue('');
    }

    function handleSearchChange(e, { value }) {
        setLoading(true);
    
        setTimeout(() => {
          
          if (value.length < 1) {
            return resetComponent();
          }
          
          setLoading(false);
          getUsersByKeyword(value, 1, 10)
            .then((response) => {
              console.log(response);
            }).catch(error => console.error(error));
          setResults(["ss", "ss"]);
        }, 300)
      }

    return (
        <SearchBar 
          loading={loading}
          onSearchChange={handleSearchChange}
        />
    );
}