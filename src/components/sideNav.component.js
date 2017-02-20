import React from 'react';
import { Link } from 'react-router';
import '../styles/sideNav.css';

const SideNav = () => (
    <div id="wrapper">
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                </li>
                <li>
                    <Link to='/teams'>Your teams</Link>
                </li>
                <li>
                    <Link to='/clouds'>Your clouds</Link>
                </li>
                <li>
                    <Link to='/timesheets'>Your timesheets</Link>
                </li>
                <li>
                    <Link to='/help'>Help</Link>
                </li>
            </ul>
        </div>
    </div>


)

export default SideNav;