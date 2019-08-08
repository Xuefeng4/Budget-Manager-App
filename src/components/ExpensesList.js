import React from 'react';
import {connect} from 'react-redux'
import ExpensesListItem from './ExpensesListItem.js'
import selectExpenses from '../selectors/expenses.js'

const ExpensesList = (props)=>(
  <div className='content-container'>
  <div className='list-header'>
  <div className='show-for-mobile'>Expenses</div>
  <div className='show-for-desktop'>Expenses</div>
  <div className='show-for-desktop'>Amount</div>
  </div>
  <div className='list-body'>
    {props.expenses.length === 0?(
      <div className='list-item list-item--error'>
      <span>No expenses</span>
      </div>):
    (props.expenses.map((expense)=>{
      return <ExpensesListItem {...expense} key = {expense.id} />;
    })
    )}
  </div>
  </div>
);

const mapStateToProps = (state)=>{
  return {
    expenses:selectExpenses(state.expenses,state.filters)
  };
}


export default connect(mapStateToProps)(ExpensesList);
//connect is reactive it will rerender as the state change;
