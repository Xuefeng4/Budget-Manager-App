import moment from 'moment';

const defaultFiltersState = {
  text:"",
  sortBy:"date",
  startDate:moment().startOf('month'),
  endDate:moment().endOf('month')
};

const filtersReducer = (state = defaultFiltersState, action)=> {
  switch(action.type){
    case "SET_TEXT":
      return {
        ...state,
        text:action.text
      }
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy:action.sortBy
      }
    case "SORT_BY_Amount":
      return {
        ...state,
        sortBy:action.sortBy
      }
    case "SET_STARTDATE":
      return {
        ...state,
        startDate:action.date
      }
    case "SET_ENDDATE":
      return {
        ...state,
        endDate:action.date
      }
    default:
    return state;
  }
};

export default filtersReducer
