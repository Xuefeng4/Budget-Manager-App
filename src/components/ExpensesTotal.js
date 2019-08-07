import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses.js'
import getAmountTotal from '../selectors/expenses-total.js'

const ExpensesTotal= ((props)=>{
  const expenseWord = props.count === 0||1? 'expense':'expenses';
  const totalFormat = numeral(props.total/100).format('$0,0.00')
  return(
    <div>
    <h1>Viewing {props.count} {expenseWord} totalling {totalFormat}</h1>
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
