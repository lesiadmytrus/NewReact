import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../route';

class Header extends Component {
  render () {
    return <header className="header">
      <Link to={PATHS.INDEX}>HomeToDos </Link>
      {/* <Link to={PATHS.ITEM_DETAILS}>Items Details </Link> */}
       <Link to={PATHS.SIGNIN}>Sign In </Link>
      <Link to={PATHS.SIGNUP}>Sign Up</Link> 
    </header>
  }
}
export default Header;