import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import Pagination from '../Pagination';
import selectors from '../../store/selectors';
import actionCreators from '../../store/actionCreators';
import { Wrapper, Comment } from './styled';


function Listing() {

  const data = useSelector(state => selectors.getDataToBeDisplayed(state));
  const currentItemsRange = useSelector(state => selectors.getCurrentPage(state));
  const dispatch = useDispatch();

  useEffect(() => {
    actionCreators.getDataAction(dispatch);
  },[dispatch]);


  const paginatedData = Object.keys(currentItemsRange).length > 0 && data.length > 0 && data.slice(currentItemsRange.range_from, currentItemsRange.range_to);


  return (
    <Row>
      <Col span={24}>
        <Wrapper>
          {
            paginatedData && paginatedData.length > 0 && paginatedData.map(item => {
              return (
                <Comment key={item.id}
                  author={`item Id : ${item.id} || user : ${item.userId} => title: ${item.title}`}
                  content={item.body}
                />
              );
            })
          }
        </Wrapper>
        <Pagination/>
      </Col>
    </Row>
  );
}


Listing.propTypes = {
  users: PropTypes.array,
  role: PropTypes.array,
  filtered: PropTypes.array,
  visible: PropTypes.bool,
  filtersStatus: PropTypes.bool,
  getListOfUsers: PropTypes.func,
};

export default Listing;
