import {createStore, combineReducers} from 'redux';
import uuid from 'uuid'
//add expenses
//remove
//edit
//set-text filters
//sort by date
//sort by amount
//sort by startDate
//sort by endDate
const demoState = {
  expenses:[{
    id:'123',
    description:'June Rent',
    note:'This was the final payment for that address',
    amount:56700,
    createAt:0
  }],
  filters:{
    text:'rent',
    sortBy:'amount',//date ot amount,
    startDate:undefined,
    endDate:undefined
  }
};

//Expense Reducers
const expensesReducer = (state = [],action)=>{
  switch(action.type){
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter((item)=>item.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((item)=>{
        if(item.id === action.id){
          return{
            ...item,
            ...action.updates
          }
        }else{
          return item
        }
      })
    default:
      return state;
  }
}

//Filters Reducers
const defaultFiltersState = {
  text:"",
  sortBy:"date",
  startDate:undefined,
  endDate:undefined
};

const filtersReducer = (state = defaultFiltersState, action)=> {
  switch(action.type){
    case "SET_TEXT":
      return {
        ...state,
        text:action.text
      }
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy:action.sortBy
      }
    case "SORT_BY_Amount":
      return {
        ...state,
        sortBy:action.sortBy
      }
    case "SET_STARTDATE":
      return {
        ...state,
        startDate:action.date
      }
    case "SET_ENDDATE":
      return {
        ...state,
        endDate:action.date
      }
    default:
    return state;
  }
};

//store creation
const store = createStore(
  combineReducers({
    expenses:expensesReducer,
    filters:filtersReducer
  })
);
//action gengrator
// add expense
const addExpense = ({description = '', note='', amount=0, createAt=0} = {})=>({
  type:'ADD_EXPENSE',
  expense:{
    id:uuid(),
    description,
    note,
    amount,
    createAt
  }
});

const expenseOne = store.dispatch(addExpense({description:'rent',amount:2000,createAt:1000}));
const expenseTwo = store.dispatch(addExpense({description:'market',amount:4000,createAt:-1000}));
// console.log(store.getState())
const expenseThree = store.dispatch(addExpense({description:'food',amount:1000,createAt:9000}));


//remove expense
const removeExpense = ({id} = {})=>({
  type:"REMOVE_EXPENSE",
  id
});
// store.dispatch(removeExpense(expenseOne.expense));

//edit expenses
const editExpense = (id,updates)=>({
  type:'EDIT_EXPENSE',
  id,
  updates
});
store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}))

//change text in fileters
const setFilterText = (text)=>({
  type:"SET_TEXT",
  text
});
store.dispatch(setFilterText(''));

//sortBy

const sortByDate =()=>({
  type:"SORT_BY_DATE",
  sortBy:'date'
})
// store.dispatch(sortByDate());

const sortByAmount =()=>({
  type:"SORT_BY_Amount",
  sortBy:'amount'
})
store.dispatch(sortByAmount());

//set start endDate
const setStartDate = (date)=>({
  type:"SET_STARTDATE",
  date
})
store.dispatch(setStartDate(125));

const setEndDate = (date)=>({
  type:"SET_ENDDATE",
  date
})
store.dispatch(setEndDate(2000));
console.log(store.getState())

//get visible expenses
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate})=>{
  return expenses.filter((expense)=>{
    const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=>{
    if(sortBy === 'date'){
      return a.createAt<b.createAt ? 1 : -1;
    }
    else if (sortBy === 'amount'){
      return a.amount<b.amount ? 1 : -1;
    }
  })
};

store.subscribe(()=>{
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
store.dispatch(setFilterText(''));
