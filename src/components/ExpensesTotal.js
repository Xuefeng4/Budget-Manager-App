import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses.js'
import getAmountTotal from '../selectors/expenses-total.js'

const ExpensesTotal= ((props)=>{
  const expenseWord = props.count === 0||1? 'expense':'expenses';
  const totalFormat = numeral(props.total/100).format('$0,0.00')
  return(
    <div className='page-summary'>
      <div className='content-container'>
        <h1 className='page-summary__title'>
          Viewing
          <span> {props.count} </span>
          {expenseWord} totalling
          <span> {totalFormat}</span>
        </h1>
        <div className='page-summary__action'>
          <Link className='button' to='/create'>Add Expense</Link>
        </div>
      </div>
    </div>
  );
});

const mapStateToProps = (state)=>{
  const visibleExpenses = selectExpenses(state.expenses,state.filters);
  return {
    count:visibleExpenses.length,
    total:getAmountTotal(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesTotal);
