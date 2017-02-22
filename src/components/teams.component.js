import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/sideNav.css';
import '../styles/teams.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

export default class Teams extends Component {
    render() {
        return (
            <div>
                <h3 className="blue-font">Your teams</h3>
                <Link to='/add_team'>
                    <h3 className="pull-right add-team-button">
                        <i className="fa fa-plus-square" aria-hidden="true"></i>
                        <label htmlFor="add-team-button">ADD TEAM</label>
                    </h3>
                </Link>
                <div>
                    <table className="table table-striped table-hover">
                        <thead className="table-header">
                            <tr>
                                <th>#</th>
                                <th>Team</th>
                                <th>Cloud</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Column content
                                    <span className=" delete-button pull-right">
                                        <i className="fa fa-times-circle" aria-hidden="true"></i>
                                        <label htmlFor="delete-button" className="delete-label">DELETE</label>
                                    </span>
                                    <Link to="/edit_team">
                                    <span className=" edit-button pull-right">
                                        <i className="fa fa-pencil-square" aria-hidden="true"></i>
                                        <label htmlFor="edit-button" className="edit-label">EDIT</label>
                                    </span>
                                    </Link>
                                </td>
                                <td>Column content</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}