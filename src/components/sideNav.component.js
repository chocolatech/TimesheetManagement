import React from 'react';
import { Link } from 'react-router';
import '../styles/sideNav.css';

const SideNav = () => (
    <div id="wrapper">
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="#">
                        Start Bootstrap
                    </a>
                </li>
                <li>
                    <a href="#">Your teams</a>
                </li>
                <li>
                    <a href="#">Your clouds</a>
                </li>
                <li>
                    <a href="#">Your timesheets</a>
                </li>
                <li>
                    <a href="#">Help</a>
                </li>
            </ul>
        </div>
    </div>


)

export default SideNav;