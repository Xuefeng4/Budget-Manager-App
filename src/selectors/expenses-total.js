export default (expenses)=>{
  return expenses.map((expense)=>expense.amount)
  .reduce((accumulator, cur)=>{
    return accumulator+cur;
  },0)
}
