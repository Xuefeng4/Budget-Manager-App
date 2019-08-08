import React from 'react';
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux';
import {startEditExpense, startRemoveExpense} from '../actions/expenses.js';

const EditExpensePage =(props)=>(
  <div>
    <div className='page-summary'>
    <div className='content-container'>
      <h1 className='page-summary__title'>
      Editing Expense
      </h1>
    </div>
    </div>
    <div className='content-container'>
      <ExpenseForm  expense = {props.expense}
      onSubmit = {(expense)=>{
        props.dispatch(startEditExpense(props.expense.id,expense));
        props.history.push('/');
      }}/>
      <button className='button button--sencondary' onClick = {()=>{
        const id = props.expense.id;
        props.dispatch(startRemoveExpense({id}));
        props.history.push('/');
      }}>Remove Expense</button>
    </div>

  </div>
);

const mapStateToProps= (state,props)=>{
  return{
    expense:state.expenses.find((expense)=>{
      return expense.id === props.match.params.id
    })};
};

export default connect(mapStateToProps)(EditExpensePage);
