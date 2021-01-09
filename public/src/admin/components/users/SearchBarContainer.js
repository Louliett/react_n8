import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { getUsersByKeyword } from '../../services/user.service';

export function SearchBarContainer(props) {
  //a search can show a loading indicator
  const [loading, setLoading] = useState(false);
  //current value of the search input. Creates a controlled component.
  const [value, setValue] = useState('');

  function resetComponent() {
      setLoading(false);
      setValue('');
  }

  function handleSearchChange(e, { value }) {
    setLoading(true);
    setValue(value);

    setTimeout(() => {
        
      if (value.length < 1) {
        return resetComponent();
      }
          
      setLoading(false);
        getUsersByKeyword(value, 1, 10)
          .then((response) => {

            props.setTotalPages(response[0]);
            props.setUsers(response[1]);
          }).catch(error => console.error(error));
    }, 300);
  }

  useEffect(() => {
    if (value.length > 0) {
      props.setSearchMode(true);
    } else {
      props.setSearchMode(false);
    }
  }, [props, value]);

  return (
      <SearchBar 
        loading={loading}
        onSearchChange={handleSearchChange}
      />
  );
}