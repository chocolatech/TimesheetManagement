import React from 'react';
import {Link} from 'react-router';

const TopNav = () => (
    <div>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/address'>Address</Link>
    </div>
)

export default TopNav;