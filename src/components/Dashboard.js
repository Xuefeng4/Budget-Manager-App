import React from 'react';
import ExpensesList from './ExpensesList.js'
import ExpensesListFilters from './ExpensesListFilters.js'
import ExpensesTotal from './ExpensesTotal.js'

const Dashboard =()=>(
  <div>
  This is from my Dashboard component
  <ExpensesTotal />
  <ExpensesListFilters />
  <ExpensesList />
  </div>
);

export default Dashboard
