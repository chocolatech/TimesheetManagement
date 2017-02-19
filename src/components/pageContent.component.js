import React, { Component } from 'react';
import '../styles/sideNav.css';

export default class PageContent extends Component {
    render() {
        return (
            <div id="wrapper">
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
