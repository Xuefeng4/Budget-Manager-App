import React from 'react';
import {Link} from 'react-router-dom';

const ExpensesListItem = (props)=>(
  <div>
  <Link to={`/edit/${props.id}`}>
  <h3>{props.description}</h3>
  </Link>
  <p>{props.amount}- {props.createAt}</p>
  </div>
);

export default ExpensesListItem;
