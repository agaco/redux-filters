import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as PropTypes from 'prop-types';
import selectors from '../../store/selectors';
import actionCreators from '../../store/actionCreators';
import { Wrapper, PaginationItem } from './styled';


function Pagination() {
  const dispatch = useDispatch();
  const data = useSelector(state => selectors.getDataToBeDisplayed(state));
  const itemsPerPageCounter = 15;
  const paginationCounter = data.length > 0 && parseInt(data.length / itemsPerPageCounter);

  const paginationRenderer = data.length > 0 && paginationCounter && Array.from({length: paginationCounter}, (v, index) => {
    return ({
      name: index +1,
      range_from: (index) * itemsPerPageCounter,
      range_to: ((index) * itemsPerPageCounter) + itemsPerPageCounter -1,
    });
  });

  const payload = ({
    range_from: 0,
    range_to: itemsPerPageCounter -1,
  });


  useEffect(() => {
    actionCreators.setPagination(dispatch, payload);
  },[dispatch]);


  const handlePageChange = (val) => {
    const payload = val && ({
      range_from:val.range_from,
      range_to: val.range_to,
    });
    actionCreators.setPagination(dispatch, payload);
  };

  return (
    <Wrapper>
      {
        data.length > 0 && paginationRenderer.length > 0 && paginationRenderer.map((item, index) => {
          return (
            <PaginationItem key={index}
              shape='circle'
              onClick={() => handlePageChange(item)}
            >
              { item.name }
            </PaginationItem>
          );
        })
      }
    </Wrapper>
  );
}


Pagination.propTypes = {
  users: PropTypes.array,
  role: PropTypes.array,
  filtered: PropTypes.array,
  visible: PropTypes.bool,
  filtersStatus: PropTypes.bool,
  getListOfUsers: PropTypes.func,
};

export default Pagination;
