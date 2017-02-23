import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/sideNav.css';
import '../styles/teams.css';

export default class Timesheets extends Component {

    constructor(props) {
        super(props);
        this.state = { timesheets: [] };
    }

    componentDidMount() {
        fetch("api/timesheets_mockups.json")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    timesheets: json
                });
            });
    };

    render() {
        var timesheets = [];
        for (let i = 0; i < this.state.timesheets.length; i++) {
            let timesheet = this.state.timesheets[i];
            timesheets.push(<tr key={i}>
                <td>{timesheet.person}</td>
                <td>{timesheet.cloud}</td>
                <td>{timesheet.manager}</td>
                <td>{timesheet.contractor}</td>
                <td>{timesheet.resourceSupport}</td>
                <td>{timesheet.order}</td>
                <td>{timesheet.week}</td>
                <td>{timesheet.month}</td>
                <td>{timesheet.year}</td>
                <td>{timesheet.expected}</td>
                <td>{timesheet.regular}</td>
                <td>{timesheet.correction}</td>
                <td>{timesheet.unavailability}</td>
                <td>{timesheet.onCallDuty}</td>
                <td>{timesheet.duty}</td>
                <td>{timesheet.onCallWork}</td>
                <td>{timesheet.subactivity}</td>
                <td>{timesheet.status}</td>
            </tr>);
        }
        return (
            <div className="smaller-font">
                <h3 className="blue-font">Your timesheets</h3>
                <Link to='/'>
                    <h3 className="pull-right export-button">
                        <i className="fa fa-file-text" aria-hidden="true"></i>
                        <label htmlFor="export-button">EXPORT TO XLS</label>
                    </h3>
                </Link>
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead className="table-header">
                                <tr>
                                    <th>Person</th>
                                    <th>Cloud</th>
                                    <th>Manager</th>
                                    <th>Contractor</th>
                                    <th>Resource Support</th>
                                    <th>Order</th>
                                    <th>Week</th>
                                    <th>Month</th>
                                    <th>Year</th>
                                    <th>Expected</th>
                                    <th>Regular</th>
                                    <th>Correction</th>
                                    <th>Unavailability</th>
                                    <th>On-Call Duty (Non Holidays)</th>
                                    <th>On-Call Duty (Holidays)</th>
                                    <th>On-Call Work</th>
                                    <th>Subactivity</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timesheets}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}