import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';
import Select from 'react-select';

const DropdownFilter = ({
    content,
    onChange,
    type,
  }) => {

  const onSelectChange = async (val) => {
    const value = await val ? val.map(item => item.value) : [];
    await onChange(value, type);
  };

  return (
       <Fragment>
         <Select
          name='UserId select'
          placeholder='Select userId'
          isMulti
          options={content}
          onChange={val => onSelectChange(val)}
         />
       </Fragment>
  );
}


DropdownFilter.propTypes = {
  content: PropTypes.array,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default DropdownFilter;
