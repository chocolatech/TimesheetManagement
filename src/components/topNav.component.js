import React from 'react';
import {Link} from 'react-router';
import {AppBar} from 'react-toolbox/lib/app_bar';
// import 'react-toolbox/lib/app_bar/theme.css';
//import AppBar from 'react-toolbox/lib/app_bar/AppBar.js';

const TopNav = () => (
    <div>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/address'>Address</Link>
        <AppBar/>
    </div>
)

export default TopNav;