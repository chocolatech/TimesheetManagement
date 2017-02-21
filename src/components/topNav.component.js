import React from 'react';
import { Link } from 'react-router';

const TopNav = () => (
    <nav className="navbar navbar-inverse clear-margin-bottom">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to='/' className="navbar-brand">Timesheet Management</Link>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Hello, USERNAME!</a></li>
        <li><Link to='/signin'>Log out</Link></li>
      </ul>
    </div>
  </nav>
)

export default TopNav;