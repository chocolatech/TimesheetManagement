import React, { Component } from 'react';
import '../styles/sideNav.css';
import '../styles/teams.css';

export default class Teams extends Component {
    render() {
        return (
            <div>
                <h3 className="blue-font">Your teams</h3><br />
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
                                <td>Column content</td>
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