import React from 'react';
import AddExpense from '../components/AddExpense.js'
import EditExpense from '../components/EditExpense.js'
import Help from '../components/Help.js'
import NotFound from '../components/NotFound.js'
import Dashboard from '../components/Dashboard.js'
// import Header from '../components/Header.js'
import {Switch, Router, Route,Link,NavLink} from 'react-router-dom';
import Login from '../components/Login.js'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();
const AppRouter = ()=>(
  <Router history = {history}>
    <div>
      <Switch>
        <PublicRoute path = '/' component = {Login} exact = {true} />
        <PrivateRoute path = '/dashboard' component = {Dashboard} />
        <PrivateRoute path = '/create' component = {AddExpense} />
        <PrivateRoute path = '/edit/:id' component = {EditExpense} />
        <Route path = '/help' component = {Help} />
        <Route component = {NotFound} />
      </Switch>
    </div>
  </Router>
);
//<BrowserRouter> is auto with browser history using router can add history by self
export default AppRouter;
//dynamic match
