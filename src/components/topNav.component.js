import React from 'react';
import { Link } from 'react-router';

const TopNav = () => (
    <div>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/address'>Address</Link>
        <a href="#" className="btn btn-primary">Primary</a>
    </div>
)

export default TopNav;