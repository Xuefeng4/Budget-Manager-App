import { createStore } from 'redux';

// const store = createStore((state = {count:0},action)=>{
//   switch(action.type){
//     case "INCREMENT":
//       const incrementBy = typeof action.incrementBy === "number"?action.incrementBy:1;
//       return {
//         count:state.count+ incrementBy
//       };
//     case 'DECREMENT':
//       const decrementBy = typeof action.decrementBy === "number"?action.decrementBy:1;
//       return {
//         count:state.count - decrementBy
//       };
//     case "RESET":
//       return {
//         count:0
//       };
//     default:
//     return state;
//   }
// });

// const unsubscribe = store.subscribe(()=>{
//   console.log(store.getState());
// });

// store.dispatch({
//   type:'INCREMENT',
//   incrementBy:5
// });

// store.dispatch({
//   type:'DECREMENT',
//   decrementBy:2
// });
//
// unsubscribe();
// store.dispatch({type:'RESET'});
//
//




//parameter of desctructuring
//below is meaning ({incrementBy = 1} = {}) destructuring the {} and get incrementBy
// which is default 1 and if no parameter the it is default{}
const countReducer = (state = {count:0},action)=>{
  switch(action.type){
    case "INCREMENT":
      return {
        count:state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count:state.count - action.decrementBy
      };
    case "RESET":
      return {
        count:0
      };
    default:
    return state;
  }
};
const store = createStore(countReducer);
//action generator·ructuring
//parameter destructuring
const incrementCount = ({incrementBy = 1} = {})=>({
  type:'INCREMENT',
  incrementBy
});
const decrementCount = ({decrementBy = 1} = {})=>({
  type:'DECREMENT',
  decrementBy
})
const resetCount = ()=>({
  type:'RESET'
});

store.subscribe(()=>{
  console.log(store.getState());
});
store.dispatch(incrementCount({incrementBy:3}));
store.dispatch(decrementCount({decrementBy:3}));
store.dispatch(resetCount());
