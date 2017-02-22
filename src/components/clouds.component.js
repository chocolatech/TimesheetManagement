import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/sideNav.css';

export default class Clouds extends Component {
    render() {
        return (
            <div>
                <h3 className="blue-font">Your clouds</h3>
                <Link to='/'>
                    <h3 className="pull-right add-team-button">
                        <i className="fa fa-plus-square" aria-hidden="true"></i>
                        <label htmlFor="add-team-button">IMPORT FROM XLS</label>
                    </h3>
                </Link>
                <div>
                    <table className="table table-striped table-hover">
                        <thead className="table-header">
                            <tr>
                                <th>Cloud</th>
                                <th>Order</th>
                                <th>Manager</th>
                                <th>Resource Support</th>
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