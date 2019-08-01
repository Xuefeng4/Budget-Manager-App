import React from 'react';
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux';
import {startEditExpense, startRemoveExpense} from '../actions/expenses.js';

const EditExpensePage =(props)=>(
  <div>
  Editing the expense with id of {props.match.params.id}
  <ExpenseForm expense = {props.expense}
  onSubmit = {(expense)=>{
    props.dispatch(startEditExpense(props.expense.id,expense));
    props.history.push('/');
  }}/>
  <button onClick = {()=>{
    const id = props.expense.id;
    props.dispatch(startRemoveExpense({id}));
    props.history.push('/');
  }}>REMOVE ME</button>
  </div>
);

const mapStateToProps= (state,props)=>{
  return{
    expense:state.expenses.find((expense)=>{
      return expense.id === props.match.params.id
    })};
};

export default connect(mapStateToProps)(EditExpensePage);
