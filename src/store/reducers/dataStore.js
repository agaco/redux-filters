import actions from '../actions';

const initialState = {
  data: [],
  displayedData: [],
  pagination: {},
  filters: {
    search: '',
    select: [],
  },
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DATA_FROM_API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        displayedData: action.payload,
      };
    case actions.SET_PAGINATION:
      return {
        ...state,
        pagination: action.payload,
      };
    case actions.SET_FILTER_ITEM:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.type]: action.payload.val,
        }
      };
      case actions.SET_DATA_FILTERING: {
        const { search, select } = state.filters;
        const newState = [...state.data]
        .filter(item => select.length > 0 ? select.includes(item.userId) : item)
        .filter(item => search.length > 0 ? (item.body.includes(search) || item.title.includes(search)) : item);

        return {
          ...state,
          displayedData: newState, // I know, można tez filtrować bezposrednio tu :)
        };
      }

    default:
      return state;
  }
};
