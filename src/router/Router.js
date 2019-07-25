import React from 'react';
import AddExpense from '../components/AddExpense.js'
import EditExpense from '../components/EditExpense.js'
import Help from '../components/Help.js'
import NotFound from '../components/NotFound.js'
import Dashboard from '../components/Dashboard.js'
import Header from '../components/Header.js'
import {Switch, BrowserRouter, Route,Link,NavLink} from 'react-router-dom';

const Router = ()=>(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path = '/' component = {Dashboard} exact = {true}/>
        <Route path = '/create' component = {AddExpense} />
        <Route path = '/edit/:id' component = {EditExpense} />
        <Route path = '/help' component = {Help} />
        <Route component = {NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
//dynamic match
