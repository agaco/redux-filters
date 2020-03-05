import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'antd';
import DropdownFilter from './DropdownFilter';
import SearchBar from './SearchBar';
import selectors from '../../store/selectors';
import actionCreators from '../../store/actionCreators';

function Filters() {
  const data = useSelector(state => selectors.getFetchedData(state));
  const dispatch = useDispatch();

  const userIds = [...new Set(data.map(item => item.userId))].map(item => ({value: item, label: item}));

  const onChange = (val, type) => {
    actionCreators.setFilters(dispatch, {val, type});
  };

  return (
    <Row>
      <Col span={5}>
        <DropdownFilter content={userIds} type='select' onChange={onChange}/>
      </Col>
      <Col span={19}>
        <SearchBar content={userIds} type='search' onChange={onChange}/>
      </Col>
    </Row>
  );
}

export default Filters;
