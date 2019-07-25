import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm'
import {addExpense} from '../actions/expenses'
const AddExpense =(props)=>(
  <div>
  This is from my Add component
  <h1>Add Expense</h1>
  <ExpenseForm onSubmit = {(expense)=>{
    props.dispatch(addExpense(expense));
    props.history.push('/');
  }}/>
  </div>
);

export default connect()(AddExpense);

//connect can pass state and dispatch
