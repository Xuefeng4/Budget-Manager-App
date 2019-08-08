import React from 'react';
import ExpensesList from './ExpensesList.js'
import ExpensesListFilters from './ExpensesListFilters.js'
import ExpensesTotal from './ExpensesTotal.js'

const Dashboard =()=>(
  <div>
  <ExpensesTotal />
  <ExpensesListFilters />
  <ExpensesList />
  </div>
);

export default Dashboard
