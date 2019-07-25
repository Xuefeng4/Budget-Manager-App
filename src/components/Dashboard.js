import React from 'react';
import ExpensesList from './ExpensesList.js'
import ExpensesListFilters from './ExpensesListFilters.js'

const Dashboard =()=>(
  <div>
  This is from my Dashboard component
  <ExpensesListFilters />
  <ExpensesList />
  </div>
);

export default Dashboard
