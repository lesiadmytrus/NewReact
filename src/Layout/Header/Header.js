import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PATHS} from '../../route';

class Header extends Component {
  render() {
    return <header className="header">
      <Link to={PATHS.INDEX}>HomeToDos </Link>
      <Link to={PATHS.SIGNIN}>SignIn </Link>
      <Link to={PATHS.SIGNUP}>SignUp </Link>
      <Link to={PATHS.SIGNIN} onClick={() => {
        localStorage.clear()
      }}>Logout</Link>
    </header>
  }
}
export default Header;