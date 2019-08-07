import React from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import Header from '../components/Header.js'


//...rest create a rest variable with the left things
export const PrivateRoute = ({isAuthenticated, component:Component}, ...rest)=>(
  <Route {...rest} component = {(props)=>(
    isAuthenticated ? (
      <div>
      <Header />
      <Component {...props}/>
      </div>
    ):(
      <Redirect to='/' />
    )
  )}/ >
);

const mapStateToProps = (state) =>({
  isAuthenticated: !!state.auth.uid,
})

export default connect(mapStateToProps)(PrivateRoute);
