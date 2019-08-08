import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import uuid from 'uuid';

export default class ExpenseForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id:uuid(),
      description:props.expense? props.expense.description:'',
      note:props.expense? props.expense.note:'',
      amount:props.expense? (props.expense.amount/100).toString():'',
      createAt:props.expense? moment(props.expense.createAt):moment(),
      calendarFocused:false,
      error:''
    }
  }
  onDescriptionChange = (e)=>{
    const description = e.target.value;
    this.setState(()=>({description}));
  };

  onNoteChange = (e)=>{
    e.persist();
    this.setState(()=>({note:e.target.value}));
  };

  onAmountChange = (e)=>{
    const amount = e.target.value;
    if(!amount ||amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(()=>({amount}));
    }
  };

  onDateChange = (createAt)=>{
    if(createAt){
      this.setState(()=>({createAt}));
    }
  };

  onFocusChange = ({focused})=>{
    this.setState(()=>({calendarFocused:focused}));
  };

  onSubmit = (e)=>{
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
      this.setState(()=>({error:'Please provide vaild descriptions and amount'}));
    }else{
      this.setState(()=>({error:''}));
    }
    this.props.onSubmit({
      description:this.state.description,
      amount:parseFloat(this.state.amount,10)*100,
      createAt:this.state.createAt.valueOf(),
      note:this.state.note
    })
  };

  render(){
    return(
        <form className='form' onSubmit = {this.onSubmit}>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <input className='text-input' type = 'text' placeholder = 'Descriprion' autoFocus value = {this.state.description}
          onChange = {this.onDescriptionChange}/>
        <input className='text-input' type = 'text' placeholder = 'Amount' value = {this.state.amount} onChange = {this.onAmountChange} />
        <SingleDatePicker
          date = {this.state.createAt}
          onDateChange  = {this.onDateChange}
          focused = {this.state.calendarFocused}
          onFocusChange = {this.onFocusChange}
          id = {this.state.id}
          numberOfMonths = {1}
          isOutsideRange={(day)=>false}
        />
        <textarea className='textarea' placeholder = 'Add your note for the expense' value = {this.state.note} onChange = {this.onNoteChange}></textarea>
        <div>
          <button className='button'> Save Expense </button>
        </div>
        </form>
    )
  }
}
//if we want to restrict the decimal of the numbers the we needs to change type to text first;
