import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router.js'
import { Provider } from 'react-redux';
import './styles/styles.scss';
import 'normalize.css/normalize.css';//used to reset the overide the difference between different browser
import configureStore from './store/store.js';
import { addExpense,removeExpense,editExpense } from './actions/expenses.js';
import { setFilterText,sortByDate,sortByAmount,setStartDate,setEndDate } from './actions/filters.js'
import getVisibleExpenses from './selectors/expenses.js'

// const store = configureStore();
//
// store.dispatch(addExpense({description:'name',amount:444}))
//
// const jsx = (
//   <Provider store = {store}>
//     <Router />
//   </Provider>
//
// );
// ReactDOM.render(jsx, document.getElementById('app'));


const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

// const p = document.querySelector('p');
// p.remove();

// const p = document.querySelectorAll('p');
// p.forEach(function(item){
//   item.textContent = "xxxxxx";
// })

// const p = document.createElement('button');
// p.textContent = 'button';
// document.querySelector('body').appendChild(p);
//
// document.querySelector('button').addEventListener('click',(e)=>{
//   e.target.textContent = 'This button id clicked';
// });
//
// document.querySelector('#test').addEventListener('click',(e)=>{
//   e.target.textContent = 'This button is clicked';
// });
//
// document.querySelectorAll('.test1').forEach((item)=>{
//   item.textContent = 'This button is clicked';
// });
//
// document.querySelector('#test-input').addEventListener('input',(e)=>{console.log(e.target.value)});
//
// const person = function(name){
//   console.log(this);
//   this.name = name;
//   this.getname = function(){
//     return `My name is ${this.name}`
//   }
// }
//
// const hi = new person('Nathan');
// console.log(hi.getname());
