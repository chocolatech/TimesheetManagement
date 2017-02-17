import React from 'react';
import { Link } from 'react-router';
import Home from './home.component';
import '../styles/sideNav.css';

const PageContent = () => (
    <div id="wrapper">
        <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                       <Home/>
                    </div>
                </div>
            </div>
        </div>
    </div>

)

export default PageContent;