import React from 'react';
import {connect} from 'react-redux'
import ExpensesListItem from './ExpensesListItem.js'
import selectExpenses from '../selectors/expenses.js'

const ExpensesList = (props)=>(
  <div>
  <h1>Expense List</h1>
  {props.expenses.map((expense)=>{
    return <ExpensesListItem {...expense} key = {expense.id}/>;
  })}
  </div>
);

const mapStateToProps = (state)=>{
  return {
    expenses:selectExpenses(state.expenses,state.filters)
  };
}


export default connect(mapStateToProps)(ExpensesList);
//connect is reactive it will rerender as the state change;
