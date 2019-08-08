import React from 'react';
import { Link} from 'react-router-dom';
import { connect} from 'react-redux';
import {startLogout} from '../actions/auth'
const Header = ({startLogout})=>(
  <header className='header'>
    <div className='content-container'>
      <div className = 'header__content'>
      <Link to = "/dashboard" className="header__title">
        <h1>Budget Manager</h1>
      </Link>
      <button className='button modified--button' onClick = {startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch)=>({
  startLogout:()=>dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(Header);
// <NavLink to = "/edit" activeClassName = 'is-active'>Edit</NavLink>
// <NavLink to = "/dashboard" activeClassName = 'is-active' >
// <h1>Budget Manager</h1>
// </NavLink>
