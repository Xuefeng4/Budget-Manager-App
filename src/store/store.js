import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth.js';
import expensesReducer from '../reducers/expenses.js';
import filtersReducer from '../reducers/filters.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default()=>{
  const store = createStore(
    combineReducers({
      expenses:expensesReducer,
      filters:filtersReducer,
      auth:authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
