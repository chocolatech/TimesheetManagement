import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/sideNav.css';
import '../styles/teams.css';

export default class Timesheets extends Component {
    render() {
        return (
            <div className="smaller-font">
                <h3 className="blue-font">Your timesheets</h3>
                <Link to='/'>
                    <h3 className="pull-right export-button">
                        <i className="fa fa-file-text" aria-hidden="true"></i>
                        <label htmlFor="export-button">EXPORT TO XLS</label>
                    </h3>
                </Link>
                <div>
                    <table className="table table-striped table-hover">
                        <thead className="table-header">
                            <tr>
                                <th>Person</th>
                                <th>Cloud</th>
                                <th>Week</th>
                                <th>Month</th>
                                <th>Year</th>
                                <th>Expected</th>
                                <th>Regular</th>
                                <th>Collection</th>
                                <th>Unavailability</th>
                                <th>On-Call Duty (Non Holidays)</th>
                                <th>On-Call Duty (Holidays)</th>
                                <th>On-Call Work</th>
                                <th>Subactivity</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cloud</td>
                                <td>Order</td>
                                <td>Anonymous</td>
                                <td>Anonymous</td>
                            </tr>
                            <tr>
                                <td>Cloud</td>
                                <td>Order</td>
                                <td>Anonymous</td>
                                <td>Anonymous</td>
                            </tr>
                            <tr>
                                <td>Cloud</td>
                                <td>Order</td>
                                <td>Anonymous</td>
                                <td>Anonymous</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}