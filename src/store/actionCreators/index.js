import actions from '../actions';

const setFilters = async (dispatch, payload) => {
  await dispatch({
    type: actions.SET_FILTER_ITEM,
    payload: payload,
  });

  await dispatch({
    type: actions.SET_DATA_FILTERING,
  });

};


const setPagination = async (dispatch, payload) => {
  await dispatch({
    type: actions.SET_PAGINATION,
    payload: payload,
  });
};

const getDataAction = async (dispatch) => {

  await dispatch({
    type: actions.GET_DATA_FROM_API_REQUEST,
  });

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  if (response.status === 200) {
    let responseJSON = await response.json();

    await dispatch({
      type: actions.GET_DATA_FROM_API_SUCCESS,
      payload: responseJSON,
    });

  } else {

    await dispatch({
      type: actions.GET_DATA_FROM_API_ERROR,
      payload: 'error message'
    });
  }

};

export default  {
  getDataAction,
  setPagination,
  setFilters,
}
