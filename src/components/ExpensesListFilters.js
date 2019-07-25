import React from 'react';
import {connect} from 'react-redux';
import {setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';

class ExpensesListFilters extends React.Component{
  state = {
    calendarFocused:null
  };

  onDateChange=({startDate,endDate})=>{
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (calendarFocused)=>{
    this.setState(()=>({calendarFocused}));
  }

  render(){
    return(
      <div>
      <input type='text' value={this.props.filters.text} onChange = {(e)=>{
        this.props.dispatch(setFilterText(e.target.value))}}/>
      <select value = {this.props.filters.sortBy} onChange = {(e)=>{
        e.target.value === 'date'? this.props.dispatch(sortByDate()):this.props.dispatch(sortByAmount())}}>
      <option value = 'date'>Date</option>
      <option value = 'amount'>Amount</option>
      </select>
      <DateRangePicker
      startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
      endDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
      onDatesChange={this.onDateChange} // PropTypes.func.isRequired,
      focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
      numberOfMonths = {1}
      isOutsideRange = {()=>false}
      showClearDates = {true}
    />
      </div>
    )
  }
}


const mapStateToProps = (state)=>{
  return {
    filters:state.filters
  };
}

export default connect(mapStateToProps)(ExpensesListFilters);
