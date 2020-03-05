
const getFetchedData = (state) => state.dataStore.data;
const getDataToBeDisplayed = (state) => state.dataStore.displayedData;
const getCurrentPage = (state) => state.dataStore.pagination;


export default {
  getFetchedData,
  getCurrentPage,
  getDataToBeDisplayed,
};
