import React  from 'react';
import * as PropTypes from 'prop-types';
import { Search } from './styled';


const SearchBar = ({
    onChange,
    type,
  }) => {

  return (
     <Search
      placeholder='input search text'
      onChange={e => onChange(e.target.value, type)}
     />
  );
}


SearchBar.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default SearchBar;
