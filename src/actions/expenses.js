import uuid from 'uuid'
import database from '../firebase/firebase.js';

// export const addExpense = ({description = '', note='', amount=0, createAt=0} = {})=>({
//   type:'ADD_EXPENSE',
//   expense:{
//     id:uuid(),
//     description,
//     note,
//     amount,
//     createAt
//   }
// });

export const addExpense = (expense)=>({
  type:'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {})=>{
  return (dispatch)=>{
    const {
      description = '',
      note='',
      amount=0,
      createAt=0
    } = expenseData;
    const expense = {description, note, amount, createAt}
    database.ref('expenses').push(expense).then((ref)=>{
      dispatch(addExpense({
        id:ref.key,
        ...expense
      }));
    });
  };
};

export const setExpenses = (expenses)=>({
  type:'SET_EXPENSES',
  expenses
})

export const startSetExpenses = ()=>{
  return (dispatch)=>{
    return database.ref('expenses').once('value').then((snapshot)=>{
      const expenses = [];
      snapshot.forEach((child)=>{
        expenses.push({
          id:child.key,
          ...child.val()
        });
      });
      dispatch(setExpenses(expenses));
    });
  }
}
export const removeExpense = ({id} = {})=>({
  type:"REMOVE_EXPENSE",
  id
});

export const startRemoveExpense = ({id} = {})=>{
  return (dispatch)=>{
    database.ref(`expenses/${id}`).remove().then(()=>{
    dispatch(removeExpense({id}));
  });
};
}

export const editExpense = (id,updates)=>({
  type:'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id,updates)=>{
  return (dispatch)=>{
    database.ref(`expenses/${id}`).update(updates).then(()=>{
      dispatch(editExpense(id,updates));
    });
  };
}
